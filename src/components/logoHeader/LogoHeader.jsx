import './LogoHeader.css'


import logo from "../../assets/Logo Somm2.png";
import {Link} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext.jsx";



function LogoHeader() {

    const { isAuth, user } = useContext(AuthContext);
    return (
        <>
        <section className="logo-header-section outer-content-container">

            <div className="logo-header">
            <span className="image-wrapper">
                <img src={logo} alt="Company logo"/>
            </span>

            </div>
            <div className="side-nav-container">
                {isAuth && user.roles.includes('ADMIN') && (
                    <ul className="admin-nav">
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
                    <ul className="client-nav">
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><Link to="/wineadvicerequests/addnew">Nieuw wijnadvies aanvragen</Link></li>
                        <li><Link to="/wineadvicerequests/{id}">Status huidig advies</Link></li>
                        <li><Link to="/message">Stuur sommelier bericht</Link></li>
                    </ul>
                )}
            </div>


        </section>
        </>
    )
}
export default LogoHeader;

