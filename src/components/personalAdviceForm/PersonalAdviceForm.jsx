import React, {useState} from "react";
import { useForm } from "react-hook-form";
import Input from "../input/Input.jsx";

import Button from "../button/Button.jsx";
import "./PersonalAdviceForm.css";
import axios from "axios";

function PersonalAdviceForm() {
    const {handleSubmit, register, formState: {errors}} = useForm();
    const [loading, setLoading] = useState(false);
    const [error, toggleError] = useState(null);
    const [addSucces, toggleAddSuccess] = useState(false);

 /*   async function handleFormSubmit(data) {
        setLoading(true);
        toggleError(false);
        const token = localStorage.getItem('token');

/!*        data.preventDefault();*!/

        console.log(data);

        try {
            const response = await axios.post(
                'http://localhost:8080/wineadvicerequests', {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,

                    },
                    /!*                body: JSON.stringify({
                                        name: data.target.name.value,
                                        email: data.target.email.value,
                                        phone: data.target.phone.value,
                                        message: data.target.message.value,
                                    }),*!/
                });
            console.log('Backend response::', response.data);
            toggleAddSuccess(true);
            //TODO navigate to WAR
        } catch (e) {
            console.error(e);
            toggleError(e.message);
        } finally {
            setLoading(false);
        }
    }
*/
    return (
/*        <form onSubmit={handleSubmit(handleFormSubmit)} className="advice-form">*/
        <>
            <Input
                name="name"
                labelText="Naam:"
                register={register}
                validationRules={{required: "Naam is verplicht"}}
                errors={errors}
            />

            <Input
                name="email"
                inputType="email"
                labelText="Email:"
                register={register}
                validationRules={{required: "Email is verplicht"}}
                errors={errors}
            />

            <Input
                name="phone"
                inputType="tel"
                labelText="Telefoonnummer:"
                register={register}
                validationRules={{required: "Telefoonnummer is verplicht"}}
                errors={errors}
            />

            <Input
                name="message"
                inputType="textarea"
                labelText="Bericht:"
                register={register}
                validationRules={{required: "Bericht is verplicht"}}
                errors={errors}
            />

            <label>
                <input
                    type="checkbox"
                    {...register("terms", {required: "Je moet akkoord gaan"})}
                />
                Ik ga akkoord met de <a href="/terms">algemene voorwaarden</a>
            </label>
            {errors.terms && <span className="error">{errors.terms.message}</span>}

            <button type="submit">Verstuur</button>
        </>
        /*</form>*/
    );
}
export default PersonalAdviceForm;


    {/*                                    <Input/>
        <label htmlFor="name">Naam:</label>
        <input type="text" id="name" name="name" required/>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required/>
        <label htmlFor="phone">Telefoonnummer:</label>
        <input type="tel" id="phone" name="phone" required/>
        <label htmlFor="message">Bericht:</label>
        <textarea id="message" name="message" required></textarea>
        <label htmlFor="recipe"> Hier komt een upload functie voor pdf of link functie voor het recept</label>
        <label>
            <input type="checkbox" name="terms" required/>
            Ik ga akkoord met de <a href="/terms">algemene voorwaarden</a>
        </label>
        <button type="submit">Verstuur</button>*/}

