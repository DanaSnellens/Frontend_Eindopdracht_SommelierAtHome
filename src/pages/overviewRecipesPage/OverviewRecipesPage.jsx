// Dependencies
import './OverviewRecipesPage.css';

import {useState} from "react";
import RecipeTile from "../../components/recipeTile/RecipeTile.jsx";
import useRecipes from "../../hooks/useRecipes.js";

function OverviewRecipesPage() {
    const [getAllRecipes/*, setGetAllRecipes*/] = useState(false)
    const {recipes} = useRecipes('http://localhost:8080/recipes', getAllRecipes);
    return (
        <>
            <section className="overview-recipes-section outer-content-container">
                <div className="inner-content-container">
                    <h1>Our recipes</h1>
                    <ul className= "overview-recipes-list">
                        {recipes.map((recipe) => {
                            return <RecipeTile
                                key={recipe.id}
                                id={recipe.id}
                                imageAlt={recipe.imageAlt}
                                imageLink={recipe.imageLink}
                                recipeName={recipe.recipeName}
                                course={recipe.course}
                                mainIngredient={recipe.mainIngredient}
                                otherIngredients={recipe.otherIngredients}
                                preparationTime={recipe.preparationTime}
                                shortDescription={recipe.shortDescription}
                            />
                        })}
                    </ul>
                </div>
            </section>
        </>
    );
}

export default OverviewRecipesPage;