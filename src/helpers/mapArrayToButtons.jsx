// import {Link} from "react-router-dom";
// import Button from "../components/button/Button.jsx";
//
// function mapArrayToButtons(inputArray, typeOfLink) {
//     console.log(inputArray);
//     if (!inputArray || inputArray.length === 0) {
//         return <p>No items found</p>;
//     }
//     return inputArray.map(item => (
//         <Link key={item.key} to={`/${typeOfLink}/${item.key}`}>
//             <Button>{item.value}</Button>
//         </Link>
//     ));
// }
// export default mapArrayToButtons;
import { Link } from "react-router-dom";
import Button from "../components/button/Button.jsx";

function mapArrayToButtons(inputArray = {}, typeOfLink) {
    // Convert the object to an array of [key, value] pairs
    const arrayFromObject = Object.entries(inputArray);

    if (!arrayFromObject || arrayFromObject.length === 0) {
        return <p>No items found</p>;
    }
//TODO define key/value difference between id and name (button name is different then url)
    return arrayFromObject.map(([key, value]) => (
        <Link key={key} to={`/${typeOfLink}/${key}`}>
            <Button>{value}</Button>
        </Link>

/*
    //TODO key is vervangen door name (26-2-2025) omdat button niet werkte. Maar het lijkt een ander probleem te zijnwant moet nog steeds refreshen voordat hij wel goed laadt.


    return arrayFromObject.map(([name, value]) => (
        <Link key={name} to={`/${typeOfLink}/${name}`}>
            <Button>{value}</Button>
        </Link>*/
    ));
}

export default mapArrayToButtons;
