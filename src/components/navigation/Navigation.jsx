
import './Navigation.css';
import {Link} from 'react-router-dom';
import {AuthContext} from "../../context/AuthContext.jsx";
import {useContext} from "react";
import Button from "../button/Button.jsx";
function Navigation() {

const { isAuth, user, logout } = useContext(AuthContext);
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
                                    <Button type="button" clickHandler={logout}>Logout</Button>
                                </div>
                            </div>
                        </li>
                    ) : (
                        <li><Link to="/signin">Sign In</Link></li>
                    )}
                </ul>
            </div>
            <div className="is-auth-nav outer-content-container">
                <div className="is-auth-nav-container inner-nav-container">
                    {isAuth && user.roles.includes('ADMIN') && (
                        <ul className="is-auth-nav-list">
                            <li><Link to="/dashboard">Dashboard</Link></li>
                            <li><Link to="/wines/addnew">Wijn toevoegen</Link></li>
                            <li><Link to="/recipes/addnew">Recept toevoegen</Link></li>
                            <li><Link to="/sommeliers/addnew">Sommelier toevoegen</Link></li>
                            <li><Link to="/wineadvicerequests">Overzicht requests</Link></li>
                            <li><Link to="/clients">Overzicht klanten</Link></li>
                            <li><Link to="/message">Stuur klant bericht</Link></li>
                        </ul>
                    )}
                    {isAuth && user.roles.includes('CLIENT') && (
                        <ul className="is-auth-nav-list">
                            <li><Link to="/dashboard">Dashboard</Link></li>
                            <li><Link to="/wineadvicerequests/addnew">Nieuw wijnadvies aanvragen</Link></li>
                            <li><Link to="/wineadvicerequests/{id}">Status huidig advies</Link></li>
                            <li><Link to="/message">Stuur sommelier bericht</Link></li>
                        </ul>
                    )}
                </div>

            </div>


        </nav>
    )
}

export default Navigation;