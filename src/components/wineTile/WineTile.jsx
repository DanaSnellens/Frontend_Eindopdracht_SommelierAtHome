import React from "react";
import {Link} from 'react-router-dom';

import './WineTile.css';


function WineTile( {id, imageAlt, imageLink, wineName, grapeVarietal, country, shortDescription, foodPairing} ) {
    return (
        <article className="wine-tile">
            <img className="wine-image" alt={imageAlt} src={imageLink}/>
            <h2 className="wine-name"><Link to={`/wines/${id}`}>{wineName}</Link></h2>
            <h4>{grapeVarietal}</h4>
            <h5><em>{country}</em></h5>
            <p>{shortDescription}</p>
            <p><strong><em>Food Pairing: </em></strong> {foodPairing} </p>
        </article>
    );
}

export default WineTile;