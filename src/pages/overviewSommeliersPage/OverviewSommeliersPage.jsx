import React from 'react';
import './OverviewSommeliersPage.css';
/*import {Link} from "react-router-dom";*/
import SommelierTile from "../../components/sommelierTile/SommelierTile.jsx";
import sommeliers from "../../constants/sommeliers.json";

function OverviewSommeliersPage() {

    return (
        //filter
        <>
            <section className="section-sommeliers outer-content-container">
                <div className="inner-content-container">
                    <h1>Our Sommeliers</h1>
                    <ul className= "overview-sommeliers-list">
                        {sommeliers.map((sommelier) => {
                            return <SommelierTile
                                key={sommelier.id}
                                id={sommelier.id}
                                avatar={sommelier.avatar}
                                name={sommelier.name}
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