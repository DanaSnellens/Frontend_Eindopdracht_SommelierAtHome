import {Link} from "react-router-dom";

function mapArrayToButtons(inputArray, type) {
    return inputArray.map(item => (
        <Link key={item} to={`/${type}/${item}`}>
            <button>{item}</button>
        </Link>
    ));
}
export default mapArrayToButtons;
