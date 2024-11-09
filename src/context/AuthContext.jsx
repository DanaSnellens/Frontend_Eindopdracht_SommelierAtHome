import React, {createContext, useEffect, useState} from 'react';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

export const AuthContext = createContext({});

function AuthContextProvider({ children }) {
    const [isAuth, toggleIsAuth] = useState({
        isAuth: false,
        user: {
            role: "",
        },
        status: 'pending',
    });

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token !== null) {
            const decoded = jwtDecode(token);

            void fetchUserData(decoded.sub, token)
        } else {
            toggleIsAuth({
                isAuth: false,
                user: {
                    role: "",
                },
                status: 'done',
            });
        }
    }, []);
    const navigate = useNavigate();

    async function login(JWT) {
        localStorage.setItem('token', JWT);

        if (JWT !== null) {
            const decoded = jwtDecode(JWT);
            await void fetchUserData(decoded.sub, JWT);
        }
        console.log('Gebruiker is ingelogd!');
    }

    function logout() {
        localStorage.clear();
        console.log('Gebruiker is uitgelogd!');
        toggleIsAuth({
            isAuth: false,
            user: {
                role: "",
            },
            status: 'done',
        });
        navigate('/');
    }

    const contextData = {
        isAuth: isAuth,
        login: login,
        logout: logout,
        role: localStorage.getItem('user_role'),
        fetchUserData: fetchUserData,
    };

    async function fetchUserData(userId, token) {
        try {
            const userRole = localStorage.getItem('user_role');
            let response;

            if (userRole === 'ROLE_CLIENT') {
                response = await axios.get(`http://localhost:8080/clients/${userId}`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });
                navigate('/clients/dashboard');
            } else if (userRole === 'ROLE_SOMMELIER') {
                response = await axios.get(`http://localhost:8080/sommeliers/${userId}`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });
                navigate('/sommeliers/dashboard');
            }

            localStorage.setItem('user_username', response.data.username);
            localStorage.setItem('user_role', response.data.role);
            localStorage.setItem('loggedIn', "true");

            toggleIsAuth({
                isAuth: true,
                user: {
                    role: response.data.role,
                },
                status: 'done',
            });

        } catch (e) {
            console.error(e);
            localStorage.clear();
            console.log('Gebruiker is uitgelogd!');
            toggleIsAuth({
                isAuth: false,
                user: {
                    role: "",
                },
                status: 'done',
            });
            navigate('/');
        }
    }


    return (
        <AuthContext.Provider value={contextData}>
            { (isAuth.status === 'done') && children }
            { (isAuth.status === 'pending') && <p>Loading...</p> }
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;