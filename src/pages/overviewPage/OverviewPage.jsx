
import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Tile from '../../components/tile/Tile.jsx';
import './OverviewPage.css';
import { AuthContext } from "../../context/AuthContext.jsx";

function OverviewPage() {
    const { type } = useParams();
    const navigate = useNavigate();
    const { user, isAuth, username } = useContext(AuthContext);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const hasPermission = () => {
        switch (type) {
            case 'wines':
            case 'recipes':
            case 'sommeliers':
                return true;
            case 'clients':
            case 'wineadvicerequests':
                if (isAuth) {
                    return user.roles.includes('ADMIN') || user.username === username;
                }
                return false;
            default:
                return false;
        }
    };

    useEffect(() => {

        if (!hasPermission()) {
            setError(true);
            setTimeout(() => navigate('/signin'), 3000);
            return;
        }

        async function fetchData (){
            setLoading(true);
            setError(false);

            try {
                const config = {};
                if (!['clients', 'wineadvicerequests'].includes(type)) {
                    const token = localStorage.getItem('token');
                    config.headers = {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    };
                }

                const response = await axios.get(`http://localhost:8080/${type}`, {
                });
                setData(response.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        void fetchData();
    }, [type]);


/*    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;*/

    return (
        <>
            <section className={`${type}-overview-section outer-content-container`}>
                <div className="overview-page inner-content-container">
{/*                    {error && <p className="error">Je bent niet ingelogd of hebt niet de rechten om deze pagina te bekijken. Je wordt nu doorgestuurd naar de inlogpagina.</p>}*/}
                    <h1 className="page-title">{type.charAt(0).toUpperCase() + type.slice(1)}</h1>
                    <div className="tile-container">
                        {data.map((item) => (
                            <Tile key={item.id || item.username} type={type} data={item} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default OverviewPage;
/*
import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Tile from '../../components/Tile/Tile.jsx';
import './OverviewPage.css';
import { AuthContext } from "../../context/AuthContext.jsx";

function OverviewPage() {
    const { type, id , username} = useParams();
    const navigate = useNavigate();
    const { user, isAuth } = useContext(AuthContext); // Removed unnecessary roles
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const source = axios.CancelToken.source();

        async function fetchData() {
            setLoading(true);
            if (type === 'clients' || type === 'sommeliers') {
                const response = await axios.get(`http://localhost:8080/${type}/${username}`);
                setData(response.data);
            } else if (type === 'wines' || type === 'recipes' || type === 'requests') {
                const response = await axios.get(`http://localhost:8080/${type}/${id}`);
                setData(response.data);
            }
            const token = localStorage.getItem('token');

            try {
                const response = await axios.get(`http://localhost:8080/${type}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                cancelToken: source.token,
                });
            setData(response.data);
            } catch (error) {
                console.error(error)
            }
        }
        void fetchData()

        return function cleanup() {
            source.cancel();
        }
        }, [])

*/

/*
        if (!hasPermission()) {
            setError("Je bent niet ingelogd of hebt niet de rechten om deze pagina te bekijken. Je wordt nu doorgestuurd naar de inlogpagina.");
            setTimeout(() => navigate('/signin'), 3000);
            return;
        }

        const fetchData = async () => {
            try {
                setLoading(true);

                const config = isAuth
                    ? {
                        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
                    }
                    : {};

                const response = await axios.get(`http://localhost:8080/${type}`, config);
                setData(response.data);
            } catch (error) {
                console.error(error);
                setError("Het is niet gelukt om de data op te halen. Probeer het nogmaals.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [type, id, navigate, isAuth, user.roles, user.username]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;*/
/*
    return (
        <>
            <section className={`${type}-overview outer-content-container`}>
                <div className="overview-page inner-content-container">
                    <h1 className="page-title">{type.charAt(0).toUpperCase() + type.slice(1)}</h1>
                    <div className="tile-container">
                        {data.map((item) => (
                            <Tile key={item.id || item.username} type={type} data={item} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default OverviewPage;*/


/*
import {useContext, useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Tile from '../../components/Tile/Tile.jsx';
import './OverviewPage.css';
import {AuthContext} from "../../context/AuthContext.jsx";

function OverviewPage() {
    const { type , id, username} = useParams();
    const navigate = useNavigate();
    const { user, isAuth, roles } = useContext(AuthContext);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const hasPermission = () => {
        switch (type) {
            case 'sommeliers' :
            case 'wines' :
            case 'recipes' :
                return true;
            case 'client' :
                if (isAuth) {
                    return user.roles.includes('ADMIN') || user.username === id;
                }
                return false;
            default :
                return false;
        }
    };

    useEffect(() => {
        if (!hasPermission()) {
            setError("Je bent niet ingelogd of hebt niet de rechten om deze pagina te bekijken. Je wordt nu doorgestuurd naar de inlogpagina.");
            setTimeout(() => navigate('/signin'), 3000);
            return;
        }

        const fetchData = async () => {
            try {
                const response = await axios.get(`/http://localhost:8080/${type}/${id}`);
                setData(response.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
            return response;
        };
        console.log(data);
        fetchData();
        }, [type, id, username, navigate]);
/!*
        const fetchData = async () => {
            try {
                setLoading(true);
/!*                if (type === 'clients' || type === 'sommeliers') {
                    const response = await axios.get(`http://localhost:8080/${type}/${username}`);
                    setData(response.data);
                } else if (type === 'wines' || type === 'recipes' || type === 'requests') {
                    const response = await axios.get(`http://localhost:8080/${type}/${id}`);
                    setData(response.data);
                }*!/
                if (!isAuth && (type === 'clients' || type === 'requests')) {
                    console.error("User is not authenticated, redirecting to /signin");
                    setError("Je bent niet ingelogd. Log in om deze pagina te bekijken. Je wordt nu doorgestuurd naar de inlogpagina.");
                    setTimeout(() => navigate('/signin'), 3000);
                    return;
                }

                else if (isAuth && (type === 'clients' || type === 'requests') && user.roles.includes('ADMIN')) {
                        navigate('/:type/:id')



                    setError("Deze pagina is alleen toegankelijk voor beheerders");
                    return;



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
    }, [type, id, isAuth, isAuth.roles, navigate]);*!/

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
            <section className={`${type}-overview outer-content-container`}>
                <div className= "overview-page inner-content-container">
                    <h1 className = "page-title">{type.charAt(0).toUpperCase() + type.slice(1)}</h1>
                    <div className="tile-container">
                        {response.data.map((item) => (
                            <Tile key={item.id || item.username} type={type} data={item} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}


export default OverviewPage;*/
