import React from 'react';
import './SommeliersPage.css';
/*import {Link} from "react-router-dom";*/
import SommelierTile from "../../components/sommelierTile/SommelierTIle.jsx";
import sommeliers from "../../constants/sommeliers.json";

function SommeliersPage() {
    return (
        <>
            <section className="section-sommeliers outer-content-container">
                <div className="inner-content-container">
                    <h2>Our Sommeliers</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Amet animi delectus illum ipsa ipsum maxime possimus quos rerum
                        sed veritatis. Enim error minus nemo neque possimus quas quos
                        repellat repudiandae!</p>
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

 export default SommeliersPage;