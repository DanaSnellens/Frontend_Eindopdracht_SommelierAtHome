
import './Navigation.css';
import {Link} from 'react-router-dom';
import {AuthContext} from "../../context/AuthContext.jsx";
import {useContext} from "react";
import Button from "../button/Button.jsx";
function Navigation() {

const { isAuth, logout } = useContext(AuthContext);
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
                    {isAuth ? (
                        <li>
                            <div className="dropdown">
                                <span className="icon-person"></span>
                                <div className="dropdown-content">
                                    <Link to="/dashboard">Dashboard</Link>
                                    <Button type="button" clickHandler={logout}>Logout</Button>
                                </div>
                            </div>
                        </li>
                    ) : (
                        <li><Link to="/signin">Sign In</Link></li>
                    )}
{/*                    <li><Link to="/signin">Sign In</Link></li>*/}
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;