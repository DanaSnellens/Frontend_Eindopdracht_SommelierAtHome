import { createContext, useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import isTokenValid from "../helpers/isTokenValid.js";

export const AuthContext = createContext({});

function AuthContextProvider({ children }) {
    const [isAuth, toggleIsAuth] = useState({
        isAuth: false,
        user: {
            username: '',
            roles: [],
        },
        status: 'pending',
    });
    const navigate= useNavigate();


    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token && isTokenValid(token)) {
            const decoded = jwtDecode(token);
            const roles = decoded.roles.map((role) => role.authority.replace('ROLE_', ''));
            void fetchUserData(decoded.sub, roles, token);
            console.log(decoded.sub, roles, token);
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

/*

//CLAUDE 6-12
import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import isTokenValid from '../helpers/isTokenValid';

export const AuthContext = createContext({});

function AuthContextProvider({ children }) {
    const [isAuth, setIsAuth] = useState({
        isAuth: false,
        user: {
            username: '',
            roles: [],
        },
        status: 'pending',
    });
    const navigate = useNavigate();

    // Check authentication on app load
    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token && isTokenValid(token)) {
            const decoded = jwtDecode(token);
            const roles = decoded.roles.map((role) => role.roleName.replace('ROLE_', ''));
            void fetchUserData(decoded.sub, roles, token);
        } else {
            setIsAuth({
                isAuth: false,
                user: null,
                status: 'done',
            });
        }
    }, []);

    // Handle user authentication
    async function handleLogin(username, password) {
        try {
            const response = await axios.post('http://localhost:8080/authenticate', {
                username: username,
                password: password
            });

            const token = response.data.token;

            if (token) {
                localStorage.setItem('token', token);
                const decoded = jwtDecode(token);
                const roles = decoded.roles.map((role) => role.roleName.replace('ROLE_', ''));
                await fetchUserData(decoded.sub, roles, token, '/dashboard');
            }
        } catch (error) {
            console.error('Login failed:', error);
            throw error; // Let the login component handle the error
        }
    }

    function handleLogout() {
        localStorage.clear();
        setIsAuth({
            isAuth: false,
            user: null,
            status: 'done',
        });
        navigate('/');
    }

    // Fetch user details based on role
    async function fetchUserData(username, roles, token, redirectUrl) {
        // Determine if user is a client or sommelier based on roles
        const isAdmin = roles.includes('ADMIN');
        const endpoint = isAdmin ? 'sommeliers' : 'clients';

        try {
            const response = await axios.get(`http://localhost:8080/${endpoint}/${username}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            setIsAuth({
                isAuth: true,
                user: {
                    ...response.data,
                    roles: roles,
                },
                status: 'done',
            });

            if (redirectUrl) {
                navigate(redirectUrl);
            }

        } catch (error) {
            console.error('Failed to fetch user data:', error);
            setIsAuth({
                isAuth: false,
                user: null,
                status: 'done',
            });
        }
    }

    const contextData = {
        ...isAuth,
        roles: isAuth.user ? isAuth.user.roles : [],
        login: handleLogin,
        logout: handleLogout,
        isAdmin: isAuth.user?.roles.includes('ADMIN') || false
    };

    return (
        <AuthContext.Provider value={contextData}>
            {isAuth.status === 'done' ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;*/
