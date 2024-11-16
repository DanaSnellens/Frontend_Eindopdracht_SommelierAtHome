import { createContext, useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import * as controller from "react-dom/test-utils";

export const AuthContext = createContext({});

function AuthContextProvider({ children }) {
    const [isAuth, toggleIsAuth] = useState({
        isAuth: false,
        user: null,
        status: 'pending',
    });
    const navigate= useNavigate();


    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const decoded = jwtDecode(token);
            const roles = decoded.roles.map((role) => role.authority.replace('ROLE_', ''));
            void fetchUserData(decoded.sub, roles, token);
        } else {
            console.error("Token not found in localStorage on page load");
            toggleIsAuth({
                isAuth: false,
                user: null,
                status: 'done',
            });
        }
    }, [] );
    console.log(isAuth);

    function login (JWT) {
        localStorage.setItem('token', JWT);
        const decoded = jwtDecode(JWT);
        const roles = decoded.roles.map((role) => role.authority.replace('ROLE_', ''));
        void fetchUserData(decoded.sub, roles, JWT, '/dashboard');
    }
    console.log(isAuth);
    function logout () {
        localStorage.clear();
        toggleIsAuth({
            isAuth: false,
            user: null,
            status: 'done',
        });

        console.log('Gebruiker is uitgelogd!');
        navigate('/');
    }

    async function fetchUserData(username, roles, token, redirectUrl) {
        const rolePath = roles.includes('ADMIN') ? 'sommeliers' : 'clients';

        try {
            const response = await axios.get(`http://localhost:8080/${rolePath}/${username}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            console.log("User data:", response.data);


            toggleIsAuth({
                ...isAuth,
                isAuth: true,
                user: {
                    username: response.data.username,
                    roles: roles,
                },
                status: 'done',
            });

            if (redirectUrl) {
                //TODO message en timer toevoegen net als bij overviewPage
                navigate(redirectUrl);
            }

        } catch (e) {
            console.error("No user found with this username", e);

            toggleIsAuth({
                isAuth: false,
                user: null,
                status: 'done',
            });
        }
    }

    const contextData ={
        ...isAuth,
        roles: isAuth.user ? isAuth.user.roles : [],
        login,
        logout
    };
    console.log(contextData);

    return (
        <AuthContext.Provider value={contextData}>
            { isAuth.status === 'done' ? children : <p>Loading...</p> }
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
