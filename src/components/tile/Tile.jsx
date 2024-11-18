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
        shortDescription,
        wineName,
        grapeVarietal,
        country,
        foodPairing,
        username,
        profilePictureUrl,
        firstName,
        lastName,
        certificates,
        specialities,
        experience,
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
                    <h4>{course}</h4>
                    <h5><em>{mainIngredient}</em></h5>
                    <p>{otherIngredients}</p>
                    <h4><strong>Preparation time:</strong></h4>
                    <p>{preparationTime} minutes</p>
                    <p>{shortDescription}</p>
                </>
            )}

            {type === 'wines' && (
                <>
                    <img className={`${type}-image`} alt={imageAlt} src={imageLink} />
                    <h2 className={`${type}-name`}>
                        <Link to={`/wines/${id}`}>{wineName}</Link>
                    </h2>
                    <h4>{grapeVarietal}</h4>
                    <h5><em>{country}</em></h5>
                    <p>{shortDescription}</p>
                    <p><strong><em>Food Pairing: </em></strong>{foodPairing}</p>
                </>
            )}

            {type === 'sommeliers' && (
                <>
                    <span className="avatar-image-wrapper">
                        <img className={`${type}-image`} alt="Photo of sommelier" src={profilePictureUrl} />
                    </span>
                    <h2 className={`${type}-name`}>
                        <Link to={`/sommeliers/${username}`}>{firstName} {lastName}</Link>
                    </h2>
                    <h4>{certificates}</h4>
                    <h5><em>{specialities}</em></h5>
                    <p>{experience}</p>
                </>
            )}

            {type === 'clients' && (
                <>
                    <span className="avatar-image-wrapper">
                        <img className={`${type}-image`} alt="Photo of client" src={profilePictureUrl} />
                    </span>
                    <h2 className={`${type}-name`}>
                        <Link to={`/clients/${username}`}>{firstName} {lastName}</Link>
                    </h2>
                    <h4>{email}</h4>
                    <h5><em>{membership}</em></h5>

                    <p>Requests: {wineAdviceRequestIdSet}</p>
                </>
                //TODO requests scheiden door kommas en/of in buttons met links(naar request) zetten + link naar advices
            )}
        </article>
    );
}

export default Tile;