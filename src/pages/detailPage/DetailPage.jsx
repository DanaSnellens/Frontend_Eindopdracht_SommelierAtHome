import './DetailPage.css';
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {useParams, useNavigate} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext.jsx";
import DetailCard from "../../components/detailCard/DetailCard.jsx";

function DetailPage() {
    const { type, id } = useParams();
    const { isAuth, user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const hasPermission = () => {
        switch (type) {
            case 'sommeliers':
            case 'wines' :
            case 'recipes' :
                return true;
            case 'clients' :
                if (isAuth) {
                    return user.roles.includes('ADMIN') || user.username === id;
                }
                return false;
            default:
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
                const response = await axios.get(`http://localhost:8080/${type}/${id}`);
                setData(response.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        console.log(data);
        void fetchData();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;


    return (
        <>
            <section className="detail-page outer-content-container">
                <div className="detail-page inner-content-container">
                    <DetailCard type={type} data={data} />
                </div>
            </section>
        </>
    );
}
export default DetailPage;