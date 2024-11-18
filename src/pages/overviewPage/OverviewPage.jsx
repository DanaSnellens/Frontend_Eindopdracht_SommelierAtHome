import {useContext, useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Tile from '../../components/Tile/Tile.jsx';
import './OverviewPage.css';
import {AuthContext} from "../../context/AuthContext.jsx";

function OverviewPage() {
    const { type } = useParams();
    const navigate = useNavigate();
    const { user, isAuth, roles } = useContext(AuthContext);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                if (!isAuth && (type === 'clients' || type === 'requests')) {
                    console.error("User is not authenticated, redirecting to /signin");
                    setError("Je bent niet ingelogd. Log in om deze pagina te bekijken. Je wordt nu doorgestuurd naar de inlogpagina.");
                    setTimeout(() => navigate('/signin'), 3000);
                    return;
                }

                if (isAuth && (type === 'clients' || type === 'requests')
                    && !user.roles.includes('ADMIN')) {
                    setError("Deze pagina is alleen toegankelijk voor beheerders");
                    return;
                }

                const config = isAuth ? {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                } : {};

                const response = await axios.get(`http://localhost:8080/${type}`, config);
                setData(response.data);
            } catch (e) {
                console.error(e);
                setError("Het is niet gelukt om de data op te halen. Probeer het nogmaals");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [type, isAuth, isAuth.roles, navigate]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <section className={`${type}-overview`}>
            <h1 className = "page-title">{type.charAt(0).toUpperCase() + type.slice(1)}</h1>
            <div className="tile-container">
                {data.map((item) => (
                    <Tile key={item.id || item.username} type={type} data={item} />
                ))}
            </div>
        </section>
    );
}

export default OverviewPage;