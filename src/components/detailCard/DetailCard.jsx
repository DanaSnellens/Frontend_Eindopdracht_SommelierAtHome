import React from 'react';
import {Link} from "react-router-dom";
import formatPrice from "../../helpers/formatPrice.js";

function DetailCard({ type, data }) {
    const {
        id,
        username,
        firstName,
        lastName,
        email,
        profilePictureUrl,
        profilePictureAlt,
        sommelierDescription,
        certificates,
        experienceInYears,
        curriculumVitae,
        specialization,
        membership,
        wineAdviceRequestIdSet,
        wineName,
        country,
        region,
        grapeVarietal,
        producer,
        wineStyle,
        wineType,
        foodPairing,
        year,
        price,
        aromas,
        imageLink,
        imageAlt,
        longDescription,
        recipeIdSet,
        recipeName,
        course,
        mainIngredient,
        otherIngredients,
        servings,
        preparationTime,
        winePairing,
        preparationLongDescription,
        wineIdSet
    } = data;

    return (
        <>
            <article className={`${type}-detailCard`}>
                {type === 'sommeliers' && (
                    <>
                        <h2 className={`${type}-name`}>{firstName} {lastName}</h2>
                        <span className="avatar-image-wrapper">
                        <img className={`${type}-image`} alt={profilePictureAlt} src={profilePictureUrl}/>
                        </span>
                        <h4>Certificaten: {certificates}</h4>
                        <h5><em>Gespecialiseerd in: {specialization}</em></h5>
                        <p>Ervaring: {experienceInYears} jaar</p>
                        <p>CV: {curriculumVitae}</p>
                        <p>{sommelierDescription}</p>
                    </>
                )}

                {type === 'clients' && (
                    <>
                        <h2 className={`${type}-name`}>{firstName} {lastName}</h2>
                        <span className="avatar-image-wrapper">
                        <img className={`${type}-image`} alt={profilePictureAlt} src={profilePictureUrl}/>
                        </span>
                        <h4>Lidmaatschap: {membership}</h4>
                        <p>Requests: {wineAdviceRequestIdSet}</p>
                    </>
                    //TODO requests scheiden door kommas
                )}


                {type === 'wines' && (
                    <>
                        <h1 className={`${type}-name`}>{wineName}</h1>
                        <img className={`${type}-image`} alt={imageAlt} src={imageLink}/>
                        <p><strong>Grape(s): </strong> {grapeVarietal}</p>
                        <p><strong>Type & style: </strong>{wineType} {wineStyle}</p>
                        <p><strong>Country: </strong>{country}</p>
                        <p><strong>Region: </strong>{region}</p>
                        <p><strong>Producer: </strong>{producer}</p>
                        <p><strong>Vintage: </strong>{year}</p>
                        <p><strong>Aromas: </strong>{aromas}</p>
                        <p><strong>Price: </strong>{formatPrice(price)}</p>
                        <p><strong>Description: </strong>{longDescription}</p>
                        <p><strong>Food Pairing: </strong>{foodPairing}</p>
                        <p><strong>Our recommanded recipes: </strong>{recipeIdSet}</p>
                    </>
                )}

                {type === 'recipes' && (
                    <>
                        <h1 className={`${type}-name`}>{recipeName}</h1>
                        <img className={`${type}-image`} alt={imageAlt} src={imageLink}/>
                        <p><strong>Course: </strong>{course}</p>
                        <p><strong>Servings: </strong>{servings} persons</p>
                        <p><strong> Preparation Time: </strong>{preparationTime} minutes</p>
                        <p><strong>Main ingredient: </strong>{mainIngredient}</p>
                        <p><strong>Other ingredients: </strong>{otherIngredients}</p>
                        <p><strong>Description: </strong>{preparationLongDescription}</p>
                        <p><strong>Wine pairing: </strong>{winePairing}</p>
                        <p><strong>Our recommended wines: </strong>{wineIdSet}</p>
                    </>
                )}
            </article>
        </>


    );
}

export default DetailCard;
