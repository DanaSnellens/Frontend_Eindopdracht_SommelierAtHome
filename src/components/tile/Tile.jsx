import {Link} from "react-router-dom";

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
        wineAdviceRequestIdSet
    } = data;
    return (
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
                    <p><strong>Requests: </strong> {wineAdviceRequestIdSet}</p>
                </>
                //TODO requests scheiden door kommas en/of in buttons met links(naar request) zetten + link naar advices
            )}
        </article>
    );
}

export default Tile;