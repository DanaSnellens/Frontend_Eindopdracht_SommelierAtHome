import {useContext, useEffect, useState} from 'react';
import {AuthContext} from "../../context/AuthContext.jsx";
import Button from "../../components/button/Button.jsx";
import {useNavigate} from "react-router-dom";

function DashboardPage() {
/*    const [dashboardData, setDashboardData] = useState([]);*/
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const sommelierButtons = [
        { index: 1, text: "Wijn toevoegen", onClick: () => navigate(`/wines/addnew`) },
        { index: 2, text: "Recept toevoegen", onClick: () => navigate(`/recipes/addnew`)},
        { index: 3, text: "Sommelier toevoegen", onClick: () => navigate(`sommeliers/addnew`)},
        { index: 4, text: "Overzicht requests wijnadvies", onClick: () => navigate(`requests`) },
        { index: 5, text: "Overzicht klanten", onClick: () => navigate(`/clients`) }
    ];

    const clientButtons = [
        { index: 1, text: "Nieuw wijnadvies aanvragen", onClick: () => navigate(`/wineadvicerequests/addnew`) },
        { index: 2, text: "Status huidig advies", onClick: () => navigate(`/requests`) },
        { index: 3, text: "Stuur sommelier bericht", onClick: () => navigate(`/message`) }
    ];


    return (
        <>
            <section className="dashboard-page outer-content-container">
                <div className="inner-content-container">
                    <h1>{user.roles.includes('ADMIN') ? 'Sommelier Dashboard' : 'Client Dashboard'}</h1>
                    <div className="button dashboard-buttons">
                        {user.roles.includes('ADMIN') && sommelierButtons.map((button, index) => (
                            <Button
                                key={index}
                                type="button"
                                clickHandler={button.onClick}
                                variant="primary"
                            >
                                {button.text}
                            </Button>
                        ))}
                        {user.roles.includes('CLIENT') && clientButtons.map((button, index) => (
                            <Button
                                key={index}
                                type="button"
                                clickHandler={button.onClick}
                                variant="primary"
                            >
                                {button.text}
                            </Button>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default DashboardPage;