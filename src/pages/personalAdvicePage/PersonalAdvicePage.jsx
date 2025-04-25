import './PersonalAdvicePage.css';
import React, {useContext} from 'react';
import Input from "../../components/input/Input.jsx";
import {Link} from "react-router-dom";
import PersonalAdviceForm from "../../components/personalAdviceForm/PersonalAdviceForm.jsx";
import { AuthContext } from "../../context/AuthContext.jsx";
import axios from "axios";
import {useForm} from "react-hook-form";
function PersonalAdvicePage(){
    const {isAuth, user, username} = useContext(AuthContext);
    const [loading, setLoading] = React.useState(false);
    const [error, toggleError] = React.useState(null);
    const [addSuccess, toggleAddSuccess] = React.useState(false);
    const { handleSubmit, register, errors } = useForm();
//TODO onderstaande weg als dit in form wordt opgenomen? WEn dan ook handle submit bij form
    async function handleFormSubmit(data) {
        setLoading(true);
        toggleError(false);
        const token = localStorage.getItem('token');

        /*        data.preventDefault();*/

        console.log(data);

        try {
            const response = await axios.post(
                'http://localhost:8080/wineadvicerequests', {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,

                    },
                    /*                body: JSON.stringify({
                                        name: data.target.name.value,
                                        email: data.target.email.value,
                                        phone: data.target.phone.value,
                                        message: data.target.message.value,
                                    }),*/
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


    return (
        <>
            <section className="section-personal-advice outer-content-container">
                <div className="inner-content-container__text-restriction">
                    <h1>Wineadvice</h1>
                    <p>Somm@Home kan u voorzien van passend wijnadvies bij uw diner. Vul het formulier in of upload uw recept en onze sommeliers voorzien u van een passende wijn bij elke gang.</p>
                    <p>U ontvangt een advies per gang met een uitgebreide beschrijving.</p>
                    <p>Wilt u de wijn ook bestellen? Dat kan! Wij bezorgen de wijn bij u thuis.</p>
                    <p>Heeft u zo'n geweldig recept dat de sommeliers dit in hun database op willen nemen? Dan ontvangt u het advies kosteloos.</p>

                    {isAuth ? (
                        <form onSubmit={handleSubmit(handleFormSubmit)} className="advice-form">
                            <PersonalAdviceForm/>
                        </form>
                    ) : (
                        <div>
                            <p>Om een verzoek in te dienen voor persoonlijk wijnadvies heeft u een account nodig.</p>
                            <p>Klik <Link to={'/register'}>hier</Link> om een account aan te maken. Heeft u al een account?
                                Dan kunt u <Link to={'/signin'}>hier</Link> inloggen.</p>
                        </div>
                )}
                </div>
            </section>

        </>
    )
}
export default PersonalAdvicePage;