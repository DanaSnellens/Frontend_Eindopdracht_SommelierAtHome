import React from "react";
import wines from '../../constants/wines.json';

import WineTile from '../../components/wineTile/WineTile.jsx';

import './OverviewWinesPage.css';
function OverviewWinesPage() {
    return (
        <>
            <section className="overview-wines-section outer-content-container">

                <div className="inner-content-container">
                    <h1>Our wines</h1>
                    <ul className= "overview-wines-list">
                        {wines.map((wine) => {
                            return <WineTile
                                key={wine.id}
                                id={wine.id}
                                image={wine.image}
                                name={wine.name}
                                grapeVarietal={wine.grapeVarietal}
                                country={wine.country}
                                shortDescription={wine.shortDescription}
                                foodPairing={wine.foodPairing}
                            />
                        })}
                    </ul>
                </div>
            </section>
        </>

    );
}

export default OverviewWinesPage;