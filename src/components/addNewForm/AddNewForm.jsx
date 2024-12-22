import React from 'react';
import Input from '../../components/input/Input';

function AddNewForm({ type, register, errors }) {
    const formConfig = {
        wines: [
            { name: "wineName", labelText: "Wine Name", inputType: "text", validationRules: { required: "Wine name is required" } },
            { name: "country", labelText: "Country", inputType: "text", validationRules: { required: "Country is required" } },
            { name: "region", labelText: "Region", inputType: "text", validationRules: { required: "Region is required" } },
            { name: "grapeVarietal", labelText: "Grape Varietal", inputType: "text", validationRules: { required: "Grape varietal is required" } },
            { name: "producer", labelText: "Producer", inputType: "text", validationRules: { required: "Producer is required" } },
            { name: "wineStyle", labelText: "Wine Style", inputType: "text", validationRules: { required: "Wine style is required" } },
            { name: "wineType", labelText: "Wine Type", inputType: "text", validationRules: { required: "Wine type is required" } },
            { name: "foodPairing", labelText: "Food Pairing", inputType: "text", validationRules: { required: "Food Pairings are required" } },
            { name: "year", labelText: "Year", inputType: "text", validationRules: { required: "Year is required" } },
            { name: "price", labelText: "Price", inputType: "text", validationRules: { required: "Price is required" } },
            { name: "aromas", labelText: "Aroma's", inputType: "text", validationRules: { required: "Aroma's are required" } },
            { name: "imageLink", labelText: "Image Link", inputType: "text", validationRules: { required: "Image link is required" } },
            { name: "imageAlt", labelText: "Image Alt (text to show when image link is not available)", inputType: "text", validationRules: { required: "Image alt (text to show if image is not available) is required" } },
            { name: "shortDescription", labelText: "Short Description", inputType: "text", validationRules: { required: "Short description is required" } },
            { name: "longDescription", labelText: "Long Description", inputType: "text", validationRules: { required: "Long description is required" } },
        ],
        recipes: [
            { name: "recipeName", labelText: "Recipe Name", inputType: "text", validationRules: { required: "Recipe name is required" } },
            { name: "mainIngredient", labelText: "Main Ingredient", inputType: "text", validationRules: { required: "Main ingredient is required" } },
            { name: "otherIngredients", labelText: "Other Ingredients", inputType: "text", validationRules: { required: "Other ingredients are required" } },
            { name: "servings", labelText: "Servings", inputType: "text", validationRules: { required: "Amount of servings is required" } },
            { name: "preparationTime", labelText: "Preparation Time", inputType: "text", validationRules: { required: "Preparation time is required" } },
            { name: "winePairing", labelText: "Wine Pairing", inputType: "text", validationRules: { required: "Wine pairing is required" } },
            { name: "imageLink", labelText: "Image link", inputType: "text", validationRules: { required: "Image Link is required" } },
            { name: "imageAlt", labelText: "Image Alt (text to show when image link is not available)", inputType: "text", validationRules: { required: "Image Alt (text to show when image link is not available) is required" } },
            { name: "preparationShortDescription", labelText: "Short description of the preparation", inputType: "text", validationRules: { required: "Short description of the preparation is required" } },
            { name: "preparationLongDescription", labelText: "Long description of the preparation", inputType: "text", validationRules: { required: "Long description of the preparation is required" } },
            { name: "wineIdSet", labelText: "Wines to combine (id's, separated by comma's)", inputType: "text" },
        ],
        sommeliers: [
            { name: "username", labelText: "Username", inputType: "text", validationRules: { required: "Username is required" } },
            { name: "firstName", labelText: "First name", inputType: "text", validationRules: { required: "First name is required" } },
            { name: "lastName", labelText: "Last name", inputType: "text", validationRules: { required: "Last name is required" } },
            { name: "email", labelText: "Email", inputType: "email", validationRules: { required: "Email is required", pattern: { value: /^[^@]+@[^@]+\.[^@]+$/, message: "Invalid email format" } } },
            { name: "password", labelText: "Password", inputType: "text", validationRules: { required: "Password is required" } },
            { name: "passwordCheck", labelText: "Password (check)", inputType: "text", validationRules: { required: "Password check is required" } },
            { name: "profilePictureUrl", labelText: "Profile picture url", inputType: "text", validationRules: { required: "Profile picture url is required" } },
            { name: "profilePictureAlt", labelText: "Profile picture alt (text to show when image link is not available)", inputType: "text", validationRules: { required: "Profile picture alt (text to show when image link is not available) is required" } },
            { name: "sommelierDescription", labelText: "Sommelier description", inputType: "text", validationRules: { required: "Sommelier description is required" } },
            { name: "certificates", labelText: "Certificates (separated by comma's)", inputType: "text", validationRules: { required: "Certificates are required" } },
            { name: "experienceInYears", labelText: "Experience in years", inputType: "integer", validationRules: { required: "Experience in years is required" } },
            { name: "curriculumVitae", labelText: "Curriculum Vitae (seperated by comma's)", inputType: "integer", validationRules: { required: "Curriculum Vitae is required" } },
            { name: "specialization", labelText: "Specialization(s) (seperated by comma's)", inputType: "integer", validationRules: { required: "Specialization is required" } },
        ],
        clients: [
            { name: "username", labelText: "Username", inputType: "text", validationRules: { required: "Username is required" } },
            { name: "firstName", labelText: "First name", inputType: "text", validationRules: { required: "First name is required" } },
            { name: "lastName", labelText: "Last name", inputType: "text", validationRules: { required: "Last name is required" } },
            { name: "email", labelText: "Email", inputType: "email", validationRules: { required: "Email is required", pattern: { value: /^[^@]+@[^@]+\.[^@]+$/, message: "Invalid email format" } } },
            { name: "password", labelText: "Password", inputType: "text", validationRules: { required: "Password is required" } },
            { name: "passwordCheck", labelText: "Password (check)", inputType: "text", validationRules: { required: "Password check is required" } },
            { name: "profilePictureUrl", labelText: "Profile picture url", inputType: "text", },
            { name: "profilePictureAlt", labelText: "Profile picture alt (text to show when image link is not available)", inputType: "text", validationRules: { required: "Profile picture alt (text to show when image link is not available) is required" } },
            { name: "membership", labelText: "Membership", inputType: "dropdown", options: { BASIC: "Basic", REGULAR: "Regular", PREMIUM: "Premium" }, validationRules: { required: "Membership is required" } },
        ],

        wineadvicerequests: [
            { name: "dinnerOccasion", labelText: "Dinner Occasion", inputType: "text", validationRules: { required: "Dinner Occasion is required" } },
            { name: "requestMessage", labelText: "Request Message", inputType: "text", validationRules: { required: "Request Message is required" } },
            { name: "recipeLink", labelText: "Recipe Link", inputType: "text", validationRules: { required: "Recipe Link is required" } },
/*            { name: "recipeFile", labelText: "Recipe File", inputType: "text"},*/
            { name: "minPricePerBottle", labelText: "Minimal price per bottle", inputType: "dropdown", validationRules: { required: "Minimal price is required"} },
            { name: "maxPricePerBottle", labelText: "Maximal price per bottle", inputType: "dropdown", validationRules: { required: "Maximal price is required"} },
        ],
    };

    const fields = formConfig[type] || [];

    return (
        <>
            {fields.map(({ name, labelText, inputType, options, validationRules }) => (
                <Input
                    key={name}
                    name={name}
                    labelText={labelText}
                    inputType={inputType}
                    options={options}
                    validationRules={validationRules}
                    register={register}
                    errors={errors}
                />
            ))}
        </>
    );
}

export default AddNewForm;
