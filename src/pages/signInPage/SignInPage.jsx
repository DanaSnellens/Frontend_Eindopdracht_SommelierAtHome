import "./SignInPage.css";
import React, {useContext, useState} from "react";
import {Link} from "react-router-dom";
import Button from "../../components/button/Button.jsx";
import button from "../../components/button/Button.jsx";
import {AuthContext} from "../../context/AuthContext.jsx";

function SignInPage() {
    const { login } = useContext(AuthContext);

    function handleSubmit(e) {
        e.preventDefault();
        login();
/*        const form = e.target;
        const formData = new FormData(form);
        const username = formData.get('username');
        const password = formData.get('password');
        console.log(username, password);*/
    }
    return (
        <>
            <section className="section-sign-in outer-content-container">
                <div className="inner-content-container__text-restriction">
                    <h1>Sign In</h1>

                    <div className="form-sign-in inner-content-container__text-restriction">
                        <form onSubmit={handleSubmit} className="sign-in-form">
                            <label htmlFor="username">Username:</label>
                            <input type="text" id="username" name="username" required/>
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" name="password" required/>
                            {/*<Button
                                type="submit"
                                disabled={false} onClick={onClick} className={variant === 'primary'buttonText="Sign In"/>*/}
                            <button type="submit">Sign In</button>
                            <p>Klik <Link to={'/register'}>hier</Link> om te registreren</p>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignInPage;