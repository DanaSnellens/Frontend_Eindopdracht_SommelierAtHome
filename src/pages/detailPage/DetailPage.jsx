import './DetailPage.css';
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {useParams, useNavigate} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext.jsx";
import DetailCard from "../../components/detailCard/DetailCard.jsx";
import Button from "../../components/button/Button.jsx";
function DetailPage() {
    const { type, id, username } = useParams();
    const { isAuth, user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    async function handleDelete (id, username) {
        /* if */(window.confirm('Are you sure you want to delete this item?')) ? console.log('yes') : console.log('no');
        const token = localStorage.getItem('token');
        try {
            if(user.roles.includes('ADMIN') || user.username === username) {
                if (type === 'sommeliers' || type === 'clients') {
                    await axios.delete(`http://localhost:8080/${type}/${username}`, {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        }
                    });
                } else {
                    await axios.delete(`http://localhost:8080/${type}/${id}`, {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        }
                    });
                }
                navigate(`/${type}`);
            } else {
                setError('You are not authorized to delete this item.');
            }
        }
        catch (error) {
            console.error('Error deleting item', error);
            setError(error.message);
        }
    };

    const handleEdit = (id, username) => {
        if (user.roles.includes('ADMIN') || user.username === username) {
            navigate(`/${type}/${id}/edit`); // Redirect to the edit page with the ID
        } else {
            alert("You don't have permission to edit this item.");
        }
    };


    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');
            try {
                if ((['clients', 'wineadvicerequests', 'wineadvices'].includes(type)) && (user.roles.includes('ADMIN') || user.username === id)) {
                    const response = await axios.get(`http://localhost:8080/${type}/${id}`, {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        }
                    });
                    console.log(response.data);
                    console.log(type);
                    console.log(id);
                    setData(response.data);
                } else {
                    const response = await axios.get(`http://localhost:8080/${type}/${id}`);
                    setData(response.data);
                    console.log(response.data);
                    console.log(type);
                    console.log(id);
                }
/*                const response = await axios.get(`http://localhost:8080/${type}/${id}`, {
/!*                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
            }*!/
                });
                setData(response.data);*/
            } catch (error) {
                console.error(error)
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        console.log(data);
        void fetchData();
    }, [type]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;


    return (
        <>
            <section className="detail-page outer-content-container">
                <div className="detail-page inner-content-container">
                    <DetailCard type={type} data={data} />
                    {isAuth && user.roles.includes('ADMIN') && (
                        <section className="isAuth-buttons-section">
                            <Button type="button" clickHandler={() => handleDelete(data.id, data.username)}>Delete</Button>
                            <Button type={"button"} clickHandler={() => handleEdit(data.id, data.username)}>Adjust</Button>
                        </section>
                    )}
                    {isAuth && user.roles.includes('CLIENT') && (
                        <section className="isAuth-buttons-section">
                            <Button type="button" clickHandler={() => handleDelete(data.id, data.username)}>Delete</Button>
                            <Button type={"button"} clickHandler={() => handleEdit(data.id, data.username)}>Adjust</Button>
                        </section>
                    )}
                </div>
            </section>
        </>
    );
}
export default DetailPage;