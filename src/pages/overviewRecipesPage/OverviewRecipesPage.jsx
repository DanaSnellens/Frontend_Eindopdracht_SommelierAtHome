import recipes from "../../constants/recipes.json";

import React from "react";
import RecipeTile from "../../components/recipeTile/RecipeTile.jsx";
import './OverviewRecipesPage.css'

function OverviewRecipesPage() {
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
                                image={recipe.image}
                                name={recipe.name}
                                course={recipe.course}
                                mainIngredient={recipe.mainIngredient}
                                otherIngredients={recipe.otherIngredients}
                                difficulty={recipe.difficulty}
                                preparationTime={recipe.preparationTime}
                                cookingTime={recipe.cookingTime}
                                shortDescription={recipe.shortDescription}

                            />
                        })}
                    </ul>
                </div>
            </section>
        </>
    )
}

export default OverviewRecipesPage;