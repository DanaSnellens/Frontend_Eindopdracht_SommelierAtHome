import {useContext, useEffect, useState} from 'react';
import {AuthContext} from "../../context/AuthContext.jsx";
import Button from "../../components/button/Button.jsx";
import {useNavigate} from "react-router-dom";

function DashboardPage() {
/*    const [dashboardData, setDashboardData] = useState([]);*/
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

/*    useEffect(() => {
        async function fetchDashboardData() {
            const token = localStorage.getItem('token');

            try {
                const response = await axios.get(`http://localhost:8080/dashboard`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });
                setDashboardData(response.data);
                }
            }
        }
    }, []);*/
    const sommelierButtons = [
        { index: 1, text: "Wijn toevoegen", type: "wines", onClick: () => navigate(`http://localhost:8080/wines/addnew`) },
        { index: 2, text: "Recept toevoegen", onClick: () => console.log("Recept toevoegen clicked") },
        { index: 3, text: "Sommelier toevoegen", onClick: () => console.log("Sommelier toevoegen clicked") },
        { index: 4, text: "Overzicht requests wijnadvies", onClick: () => console.log("Overzicht requests clicked") },
        { index: 5, text: "Overzicht klanten", onClick: () => console.log("Overzicht klanten clicked") }
    ];

    const clientButtons = [
        { index: 1, text: "Nieuw wijnadvies aanvragen", onClick: () => console.log("Nieuw wijnadvies aanvragen clicked") },
        { index: 2, text: "Status huidig advies", onClick: () => console.log("Status huidig advies clicked") },
        { index: 3, text: "Stuur sommelier bericht", onClick: () => console.log("Stuur sommelier bericht clicked") }
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