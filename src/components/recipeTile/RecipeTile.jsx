import {Link} from "react-router-dom";
import './RecipeTile.css';

function RecipeTile( {id, imageAlt, imageLink, recipeName, course, mainIngredient, otherIngredients, preparationTime, shortDescription} ) {
    return (
        <article className="recipe-tile">
            <img className="recipe-image" alt={imageAlt} src={imageLink}/>
            <h2 className="recipe-name"><Link to={`/recipes/${id}`}>{recipeName}</Link></h2>
            <h4>{course}</h4>
            <h5><em>{mainIngredient}</em></h5>
            <p>{otherIngredients}</p>
            <h4><strong>Preparation time:</strong></h4>
            <p>{preparationTime} minutes</p>
            <p>{shortDescription}</p>
        </article>
    )
}

export default RecipeTile;