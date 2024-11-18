import React, {useState} from 'react';
import './OverviewSommeliersPage.css';
/*import {Link} from "react-router-dom";*/
import SommelierTile from "../../components/sommelierTile/SommelierTile.jsx";
import sommeliers from "../../constants/sommeliers.json";
import useSommeliers from "../../hooks/useSommeliers.js";

function OverviewSommeliersPage() {
    const [getAllSommeliers/*, setGetAllSommeliers*/] = useState(false)
    const {sommeliers} = useSommeliers('http://localhost:8080/sommeliers', getAllSommeliers);
    return (
        //TODO filter
        <>
            <section className="section-sommeliers outer-content-container">
                <div className="inner-content-container">
                    <h1>Our Sommeliers</h1>
                    <ul className= "overview-sommeliers-list">
                        {sommeliers.map((sommelier) => {
                            return <SommelierTile
                                key={sommelier.username}
                                username={sommelier.username}
                                profilePictureUrl={sommelier.profilePictureUrl}
                                firstName={sommelier.firstName}
                                lastName={sommelier.lastName}
                                certificates={sommelier.certificates}
                                specialities={sommelier.specialities}
                                experience={sommelier.experience}
                            />
                        })}
                    </ul>
                </div>
            </section>
        </>
    )
 }

 export default OverviewSommeliersPage;