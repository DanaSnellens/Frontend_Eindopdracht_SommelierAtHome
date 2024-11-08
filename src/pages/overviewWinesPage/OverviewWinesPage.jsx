import React, {useState} from "react";
/*import wines from '../../constants/wines.json';*/

import WineTile from '../../components/wineTile/WineTile.jsx';

import './OverviewWinesPage.css';
import useWines from "../../hooks/useWines.js";
function OverviewWinesPage() {
    const [getAllWines/*, setGetAllWines*/] = useState(false)
    const {wines} = useWines('http://localhost:8080/wines', getAllWines);
    return (
        <>
            <section className="overview-wines-section outer-content-container">

                <div className="overview-wines-div inner-content-container">
                    <h1>Our wines</h1>
                    <ul className= "overview-wines-list">
                        {wines.map((wine) => {
                            return <WineTile
                                key={wine.id}
                                id={wine.id}
                                imageAlt={wine.imageAlt}
                                imageLink={wine.imageLink}
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