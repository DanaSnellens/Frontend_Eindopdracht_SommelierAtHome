import "./SignInPage.css";
import {useContext, useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";
import Button from "../../components/button/Button.jsx";
import {AuthContext} from "../../context/AuthContext.jsx";
import axios from "axios";
import Input from "../../components/input/Input.jsx";

function SignInPage() {
    const { login } = useContext(AuthContext);
    const {handleSubmit, register, formState: { errors } }= useForm();

    const [error, toggleError] = useState(false);

    const source = axios.CancelToken.source();

    useEffect(() => {
        return function cleanup() {
/*            source.cancel('Operation canceled.');*/
        }
    }, []);

    async function handleFormSubmit(data) {
        toggleError(false);

        try {
            const response = await axios.post('http://localhost:8080/authenticate', {
                username: data.username,
                password: data.password,
            }, {
            cancelToken: source.token,
            });
            console.log(response.data);
            login(response.data.token);
        } catch (e) {
            console.error('Gebruikersnaam of wachtwoord is onjuist', e);
            toggleError('Gebruikersnaam of wachtwoord is onjuist');
        }
    }

    return (
        <>
            <section className="section-sign-in outer-content-container">
                <div className="inner-content-container__text-restriction">
                    <h1>Sign In</h1>

                    <div className="form-sign-in inner-content-container__text-restriction">
                        <form onSubmit={handleSubmit(handleFormSubmit)} className="sign-in-form">
                            <Input
                                name="username"
                                inputType="Text"
                                labelText="Gebruikersnaam: "
                                validationRules={{ required: 'Gebruikersnaam is verplicht' }}
                                register={register}
                                errors={errors}
                            />
                            <Input
                                name="password"
                                inputType="password"
                                labelText="Wachtwoord: "
                                validationRules={{ required: 'Wachtwoord is verplicht' }}
                                register={register}
                                errors={errors}
                            />
                            {error && <p className="error">De combinatie van username en wachtwoord is onjuist</p>}
                            <Button
                                type="submit"


                                className="primary"
                                buttonText="Sign In"
                                onClick={handleFormSubmit}
                            />
                            <p>Klik <Link to={'/register'}>hier</Link> om te registreren</p>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignInPage;

/*
import "./SignInPage.css";
import React, {useContext, useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {Link, useNavigate} from "react-router-dom";
import Button from "../../components/button/Button.jsx";

import {AuthContext} from "../../context/AuthContext.jsx";
import {set} from "react-hook-form";
import axios from "axios";
import Input from "../../components/input/Input.jsx";

function SignInPage() {
    const { login, loggedIn } = useContext(AuthContext);
    const {handleSubmit, register, formState: { errors } }= useForm();
    const navigate = useNavigate();
/!*    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');*!/

    useEffect(() => {
        if (loggedIn) {
            localStorage.getItem(
                'user_role') === 'client' ? navigate('/clients/dashboard') : navigate('/sommeliers/dashboard');
        }
    }, []);


    async function handleFormSubmit(data) {
        data.preventDefault();
        setError(false);

        try {
            const response = await axios.post('http://localhost:8080/authenticate', {
                username: data.target.username.value,
                password: data.target.password.value,
            });
            localStorage.setItem('token', response.data.jwt);
            let token = response.data.jwt;
            /!*            let userRole = jwtDecode(token).role;
                        let username = jwtDecode(token).sub;*!/
            handleSubmit(token);
        } catch (e) {
            console.error(e);
            setError('Gebruikersnaam of wachtwoord is onjuist');
        }
    }

    return (
        <>
            <section className="section-sign-in outer-content-container">
                <div className="inner-content-container__text-restriction">
                    <h1>Sign In</h1>

                    <div className="form-sign-in inner-content-container__text-restriction">
                        <form onSubmit={handleSubmit(handleFormSubmit)} className="sign-in-form">
                            <Input
                                name="username"
                                inputType="Text"
                                labelText="Gebruikersnaam: "
                                validationRules={{ required: 'Gebruikersnaam is verplicht' }}
                                register={register}
                                errors={errors}
                            />
                            <Input
                                name="password"
                                inputType="password"
                                labelText="Wachtwoord: "
                                validationRules={{ required: 'Wachtwoord is verplicht' }}
                                register={register}
                                errors={errors}
                            />

                            <Button
                                type="submit"
                                disabled={false} onClick={onClick} className={variant === 'primary'} buttonText="Sign In"/>

                            <p>Klik <Link to={'/register'}>hier</Link> om te registreren</p>
{/!*
                            <label htmlFor="username">Username:</label>
                            <input type="text" id="username" name="username" required/>
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" name="password" required/>
                            <Button
                                type="submit"
                                disabled={false} onClick={onClick} className={variant === 'primary'buttonText="Sign In"/>
                            <button type="submit">Sign In</button>*!/}

                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignInPage;*/
