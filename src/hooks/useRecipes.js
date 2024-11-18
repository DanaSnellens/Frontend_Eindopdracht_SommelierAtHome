import {useEffect, useState} from "react";
import axios from "axios";

const UseRecipes = (url, trigger) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        async function fetchRecipes() {
            try {
                const response = await axios.get(url);
                setRecipes(response.data);
                console.log(response.data);
            } catch (e) {
                console.error(e);
            }
        }

        void fetchRecipes()
    }, [url, trigger]);
    return {recipes}
};
export default UseRecipes;