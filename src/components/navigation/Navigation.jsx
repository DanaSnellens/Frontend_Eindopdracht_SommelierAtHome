import styles from './Navigation.module.css';
import Button from '../button/Button.jsx';
import {Link, useNavigate} from 'react-router-dom';
function Navigation() {
    const navigate = useNavigate();

    return (
        <ul className="nav-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/wines">Wines</Link></li>
            <li><Link to="/about">About us</Link></li>

        </ul>
    )
}

export default Navigation;