import './DetailPage.css';
import sommelier from '../../constants/sommeliers.json';
import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

//TODO const aanpassen naar function???
const DetailPage = ({ type }) => {

    const { id } = useParams();
    const [detailData, setDetailData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/http://localhost:8080/${type}/${id}`);
                setDetailData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        console.log(detailData);
        fetchData();
    }, [type, id]);

    if (!detailData) return <p>Loading...</p>;

    const renderDetailContent = () => {
        switch (type) {
            case 'wines':
                return (
                    <div>
                        <h2>Wine Details</h2>
                        <p>Name: {detailData.name}</p>
                        <p>Type: {detailData.type}</p>
                        <p>Year: {detailData.year}</p>
                    </div>
                );
            case 'recipes':
                return (
                    <div>
                        <h2>Recipe Details</h2>
                        <p>Title: {detailData.title}</p>
                        <p>Description: {detailData.description}</p>
                        <p>Ingredients: {detailData.mainIngredients.join(', ')}</p>
                    </div>
                );
            case 'sommeliers':
                return (
                    <div>
                        <h2>Sommelier Details</h2>
                        <p>Name: {detailData.name}</p>
                        <p>Experience: {detailData.experience}</p>
                        <p>Specialty: {detailData.specialty}</p>
                    </div>
                );
            case 'clients':
                return (
                    <div>
                        <h2>Client Details</h2>
                        <p>Username: {detailData.username}</p>
                        <p>Email: {detailData.email}</p>
                        <p>Subscription: {detailData.subscription}</p>
                    </div>
                );
            default:
                return <p>Invalid detail type</p>;
        }
    };

    return (
        <>
            <section className="detail-page outer-content-container">
                <div className="inner-content-container">
                    {renderDetailContent}

                </div>
            </section>
        </>

    );
}
export default DetailPage;