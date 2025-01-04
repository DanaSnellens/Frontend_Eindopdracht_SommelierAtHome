import {Link} from "react-router-dom";
import mapArrayToButtons from "../../helpers/mapArrayToButtons.jsx";
import Button from "../button/Button.jsx";

function Tile ( {type, data} ) {
    const{
        id,
        imageAlt,
        imageLink,
        recipeName,
        course,
        mainIngredient,
        otherIngredients,
        preparationTime,
        preparationShortDescription,
        wineName,
        grapeVarietal,
        country,
        foodPairing,
        shortDescription,
        username,
        profilePictureUrl,
        profilePictureAlt,
        firstName,
        lastName,
        certificates,
        specialization,
        experienceInYears,
        email,
        membership,
        wineAdviceRequestIdSet,
        dinnerOccasion,
        requestMessage,
        recipeLink,
/*        recipeFile,*/
        minPricePerBottle,
        maxPricePerBottle,
        clientUsername,
        sommelierUsername,
        wineAdviceId,
        personalMessage,
        adviceExplanation,
        wineIdSet,
        wineAdviceRequestId
    } = data;

    return (
        <>
            <article className={`${type}-tile`}>
                {type === 'recipes' && (
                    <>
                        <img className={`${type}-image`} alt={imageAlt} src={imageLink} />
                        <h2 className={`${type}-name`} >
                            <Link to={`/recipes/${id}`}>{recipeName}</Link>
                        </h2>
                        <p><strong>Course: </strong> {course}</p>
                        <p><strong>Main ingredient: </strong>{mainIngredient}</p>
                        <p><strong>Other ingredients: </strong> {otherIngredients}</p>
                        <p><strong>Preparation time: </strong>{preparationTime} min</p>
                        <p><strong>Description: </strong></p>
                        <p><em>{preparationShortDescription} </em></p>
                    </>
                )}

                {type === 'wines' && (
                    <>
                        <img className={`${type}-image`} alt={imageAlt} src={imageLink} />
                        <h2 className={`${type}-name`}>
                            <Link to={`/wines/${id}`}>{wineName}</Link>
                        </h2>
                        <p><strong>Grapes: </strong> {grapeVarietal}</p>
                        <p><strong>Country: </strong>{country}</p>
                        <p><strong>Description: </strong>{shortDescription}</p>
                        <p><strong>Food Pairing: </strong>{foodPairing}</p>
                    </>
                )}

                {type === 'sommeliers' && (
                    <>
                        <span className="avatar-image-wrapper">
                            <img className={`${type}-image`} alt={profilePictureAlt} src={profilePictureUrl} />
                        </span>
                        <h2 className={`${type}-name`}>
                            <Link to={`/sommeliers/${username}`}>{firstName} {lastName}</Link>
                        </h2>
                        <p><strong>Certificates: </strong>{certificates}</p>
                        <p><strong>Specialities: </strong>{specialization}</p>
                        <p><strong>Experience: </strong>{experienceInYears} years</p>
                    </>
                )}

                {type === 'clients' && (
                    <>
                        <span className="avatar-image-wrapper">
                            <img className={`${type}-image`} alt={profilePictureAlt} src={profilePictureUrl} />
                        </span>
                        <h2 className={`${type}-name`}>
                            <Link to={`/clients/${username}`}>{firstName} {lastName}</Link>
                        </h2>
                        <p><strong>Membership: </strong>{membership}</p>
                        <p><strong>Email: </strong>{email}</p>
                        <p><strong>Requests: </strong> {mapArrayToButtons(wineAdviceRequestIdSet, 'wineadvicerequests')}</p>
                        console.log(wineAdviceRequestIdSet)
                        console.log(wineadvicerequests)
                    </>
                    //TODO requests scheiden door kommas en/of in buttons met links(naar request) zetten + link naar advices
                )}

                {type === 'wineadvicerequests' && (
                    <>
                        <h2 className={`${type}-name`}>
                            <Link to={`/wineadvicerequests/${id}`}>Request {id}</Link>
                        </h2>
                        <p><strong>Client Username: </strong>{clientUsername}</p>
                        <p><strong>Sommelier Username: </strong>{sommelierUsername}</p>
                        <p><strong>Dinner Occasion: </strong> {dinnerOccasion}</p>
                        <p><strong>Request Message: </strong> {requestMessage}</p>
                        <p><strong>Recipe Link: </strong> <Link to={recipeLink}>Recept</Link></p>
{/*                        <p><strong>Recipe File: </strong> {recipeFile}</p>*/}
                        <p><strong>Minimal Price Per Bottle: </strong> {minPricePerBottle}</p>
                        <p><strong>Maximal Price Per Bottle: </strong> {maxPricePerBottle}</p>
                        <p><strong>Wine Advice: </strong> </p>
                        <Link key={wineAdviceId} to={`/wineadvices/${wineAdviceId}`}> <Button>{wineAdviceId}</Button></Link>
                    </>
                    //TODO wineadvice: wel of niet aanwezig. Als niet aanwezig: doorlinken naar addnew wineadvice
                )}

                {type === 'wineadvices' && (
                    <>
                        <h2 className={`${type}-name`}>
                            <Link to={`/wineadvices/${id}`}>Advice {id}</Link>
                        </h2>
                        <p><strong>Personal message: </strong>{personalMessage}</p>
                        <p><strong>Advice Explanation: </strong>{adviceExplanation}</p>
                        <p><strong>Recommended wines: </strong> {wineIdSet}</p>
                        <p><strong>Request: </strong> </p> <Link key={wineAdviceRequestId} to={`/wineadvicerequests/${wineAdviceRequestId}`}> <Button>{wineAdviceId}</Button></Link>
                    </>
                    //TODO wineadvice: wel of niet aanwezig. Als niet aanwezig: doorlinken naar addnew wineadvice
                )}
            </article>
        </>
    );
}

export default Tile;