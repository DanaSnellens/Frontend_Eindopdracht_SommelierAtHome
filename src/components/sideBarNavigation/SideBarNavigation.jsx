import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext.jsx";
import {Link} from "react-router-dom";

function SideBarNavigation() {

const { isAuth, user } = useContext(AuthContext);

  return (
    <aside className="side-bar-navigation">
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
    </aside>
  );
}
export default SideBarNavigation;