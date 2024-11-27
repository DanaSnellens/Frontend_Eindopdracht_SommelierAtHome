import './PersonalAdvicePage.css';
import React from 'react';
import Input from "../../components/input/Input.jsx";
import {Link} from "react-router-dom";
function PersonalAdvicePage(){
    return (
        <>
            <section className="section-personal-advice outer-content-container">
                <div className="inner-content-container__text-restriction">
                    <h1>Wineadvice</h1>
                    <p>Somm@Home kan u voorzien van passend wijnadvies bij uw diner. Vul het formulier in of upload uw recept en onze sommeliers voorzien u van een passende wijn bij elke gang.</p>
                    <p>U ontvangt een advies per gang met een uitgebreide beschrijving.</p>
                    <p>Wilt u de wijn ook bestellen? Dat kan! Wij bezorgen de wijn bij u thuis.</p>
                    <p>Heeft u zo'n geweldig recept dat de sommeliers dit in hun database op willen nemen? Dan ontvangt u het advies kosteloos.</p>

                    <p>Om een verzoek in te dienen voor persoonlijk wijnadvies heeft u een account nodig</p>
                    <p>Klik <Link to={'/register'}>hier</Link> om een account aan te maken. Heeft u al een account?
                        Dan kunt u <Link to={'/signin'}>hier</Link> inloggen.</p>




                    <div className="advice-form">
                        <form>
{/*                            <Input/>*/}
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
                            <button type="submit">Verstuur</button>
                        </form>
                    </div>
                </div>
            </section>

        </>
    )
}
export default PersonalAdvicePage;