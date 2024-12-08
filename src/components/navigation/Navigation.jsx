
import './Navigation.css';
import {Link} from 'react-router-dom';
function Navigation() {

    return (
        <nav className=  "main-navigation outer-content-container">
            <div className= "inner-nav-container">
                <ul className="main-navigation-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li >
                    <li><Link to="/wines">Wines</Link></li>
                    <li><Link to="/recipes">Recipes</Link></li>
                    <li><Link to="/sommeliers">Sommeliers</Link></li>
                    <li><Link to="/advice">Personal Advice </Link></li>
                    <li><Link to="/signin">Sign In</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;