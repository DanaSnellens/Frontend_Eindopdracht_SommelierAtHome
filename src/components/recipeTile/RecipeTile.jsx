import {Link} from "react-router-dom";
import './RecipeTile.css';

function RecipeTile( {id, image, name, course, mainIngredient, otherIngredients, difficulty, preparationTime, cookingTime, shortDescription} ) {
    return (
        <article className="recipe-tile">
            <img className="recipe-image" alt="Afbeelding recept" src={image}/>
            <h2 className="recipe-name"><Link to={`/recipes/${id}`}>{name}</Link></h2>
            <h4>{course}</h4>
            <h5><em>{mainIngredient}</em></h5>
            <p>{otherIngredients}</p>
            <p>{difficulty} </p>
            <p>{preparationTime}</p>
            <p>{cookingTime}</p>
            <p>{shortDescription}</p>
        </article>
    )
}

export default RecipeTile;