import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext.jsx";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "../../components/button/Button.jsx";
import EditForm from "../../components/editForm/EditForm.jsx";
import {getInitialValues} from "../../helpers/getInitialValues.js";
import "./EditPage.css";


function EditPage() {
    const { type, id, username } = useParams();
    const navigate = useNavigate();
    const { isAuth, user } = useContext(AuthContext);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, toggleError] = useState(null);
    const [updateSucces, toggleUpdateSuccess] = useState(false);
    const { handleSubmit, register, formState: { errors } } = useForm();

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            try {
                const response = await axios.get(`http://localhost:8080/${type}/${id}`);
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data', error);
                toggleError(error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [id, username, type]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!data) {
        return <p>No data found for this object.</p>;
    }

    async function handleFormUpdate(updatedData) {
        setLoading(true);
        toggleError(false);
        /*        data.preventDefault();*/
        const token = localStorage.getItem('token');
        console.log(data);

        /*        let postData = {};*/

        try {
            const response = await axios.put(
                `http://localhost:8080/${type}/${id}`, updatedData,
                type === 'clients'
                    ? {}
                    : {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    }
            );

            /*    const { id } = response.data;*/
            console.log('Backend response:', response.data);
            toggleUpdateSuccess(true);
//TODO dit geeft 400 error, nog aanpassen
            /*            if((['clients', 'sommeliers'].includes(type)) ){
                            navigate(`/${type}/${username}`);
                        } else {
                            navigate(`/${type}/${id}`);
                        }*/
        } catch (e) {
            toggleError(e.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <section className="section-edit outer-content-container">
            <div className="inner-content-container__text-restriction">
                <h1>Edit {type}</h1>
                {error && <p className="error">{error}</p>}
                {loading && <p>Loading...</p>}
                {updateSucces === true && <p>Updated successfully</p>}

                <form onSubmit={handleSubmit(handleFormUpdate)} className="edit-form">
                    <EditForm type={type} register={register} errors={errors} initialValues={data} onSub/>
                    <Button type="submit" disabled={loading}>
                        {loading ? "Updating..." : "Update"}
                    </Button>
                </form>
            </div>
        </section>
    );
}

export default EditPage;

