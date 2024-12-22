import React from 'react';
import {Link} from "react-router-dom";
import formatPrice from "../../helpers/formatPrice.js";
import listFromString from "../../helpers/listFromString.js";
import mapArrayToButtons from "../../helpers/mapArrayToButtons.jsx";
import './DetailCard.css';

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
        wineIdSet,
        dinnerOccasion,
        requestMessage,
        recipeLink,
        /*recipeFile,*/
        minPricePerBottle,
        maxPricePerBottle,
        clientUsername,
        sommelierUsername,
        wineAdviceId
    } = data;

/*    const unorderedList = (list) => { */

    return (
        <>
            <article className={`${type}-detailCard`}>
                {type === 'sommeliers' && (
                    <>
                        <h2 className={`${type}-name`}>{firstName} {lastName}</h2>
                        <span className="avatar-image-wrapper">
                        <img className={`${type}-image`} alt={profilePictureAlt} src={profilePictureUrl}/>
                        </span>
                        <p><strong>Email: </strong> {email}</p>
                        <p><strong> Certificates: </strong> <span className="detail-card-list" dangerouslySetInnerHTML={{ __html: listFromString(certificates) }}/></p>
                        <p><strong>Specialities: </strong> {specialization}</p>
                        <p><strong>Experience: </strong> {experienceInYears} years</p>
                        <p><strong>CV: </strong><span className="detail-card-list" dangerouslySetInnerHTML={{ __html: listFromString(curriculumVitae) }}/></p>
                        <p><strong>Description: </strong> {sommelierDescription}</p>
                    </>
                )}

                {type === 'clients' && (
                    <>
                        <h2 className={`${type}-name`}>{firstName} {lastName}</h2>
                        <span className="avatar-image-wrapper">
                        <img className={`${type}-image`} alt={profilePictureAlt} src={profilePictureUrl}/>
                        </span>
                        <p><strong>Email: </strong> {email}</p>
                        <p><strong>Membership: </strong> {membership}</p>
                        <p><strong>Requests: </strong> {mapArrayToButtons(wineAdviceRequestIdSet, 'clients')}</p>
                    </>
                )}


                {type === 'wines' && (
                    <>
                        <h1 className={`${type}-name`}>{wineName}</h1>
                        <img className={`${type}-image`} alt={imageAlt} src={imageLink}/>
                        <p><strong>Grapes: </strong> {grapeVarietal}</p>
                        <p><strong>Type & style: </strong>{wineType} {wineStyle}</p>
                        <p><strong>Country: </strong>{country}</p>
                        <p><strong>Region: </strong>{region}</p>
                        <p><strong>Producer: </strong>{producer}</p>
                        <p><strong>Vintage: </strong>{year}</p>
                        <p><strong>Aromas: </strong>{aromas}</p>
                        <p><strong>Price: </strong>{formatPrice(price)}</p>
                        <p><strong>Description: </strong>{longDescription}</p>
                        <p><strong>Food Pairing: </strong>{foodPairing}</p>
                        <p><strong>Our recommended recipes: </strong>{mapArrayToButtons(recipeIdSet, 'recipes')}</p>
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
                        <p><strong>Our recommended wines: </strong>{mapArrayToButtons(wineIdSet, 'wines')}</p>
                    </>
                )}
                {type === 'wineadvicerequests' && (
                    <>
                        <h1 className={`${type}-name`}>Request {id}</h1>
                        <img className={`${type}-image`} alt={imageAlt} src={imageLink}/>
                        <p><strong>Client Username: </strong>{clientUsername}</p>
                        <p><strong>Sommelier Username: </strong>{sommelierUsername}</p>
                        <p><strong>Dinner Occasion: </strong>{dinnerOccasion}</p>
                        <p><strong> Request Message: </strong>{requestMessage}</p>
                        <p><strong>Recipe Link </strong>{recipeLink}</p>
{/*                        <p><strong>Recipe File: </strong>{recipeFile}</p>*/}
                        <p><strong>Minimal Price Per Bottle </strong>{minPricePerBottle}</p>
                        <p><strong>Maximal Price Per Bottle </strong>{maxPricePerBottle}</p>
                        <p><strong>Wine Advice: </strong>Hier komt een link naar het wijnadvies als die er is, anders een link naar addnew wineadvice {wineAdviceId}</p>
                        <p><strong>Our recommended wines: </strong> </p>
                        {mapArrayToButtons(wineIdSet, 'wineadvicerequests')}
                    </>
                )}
            </article>
        </>


    );
}

export default DetailCard;
