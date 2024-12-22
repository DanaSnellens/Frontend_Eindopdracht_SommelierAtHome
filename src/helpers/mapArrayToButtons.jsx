import {Link} from "react-router-dom";
import Button from "../components/button/Button.jsx";

function mapArrayToButtons(inputArray, typeOfLink) {
    return inputArray.map(item => (
        <Link key={item} to={`/${typeOfLink}/${item}`}>
            <Button>{item}</Button>
        </Link>
    ));
}
export default mapArrayToButtons;
