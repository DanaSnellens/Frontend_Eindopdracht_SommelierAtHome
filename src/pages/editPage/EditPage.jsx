import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext.jsx";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import AddNewForm from "../../components/addNewForm/AddNewForm.jsx";
import Button from "../../components/button/Button.jsx";


function AddNewPage() {
    const { type } = useParams();
    const navigate = useNavigate();
    const { isAuth, user } = useContext(AuthContext);
    const {id, username} = useParams();
    const [loading, setLoading] = useState(false);
    const [error, toggleError] = useState(null);
    const [addSucces, toggleAddSuccess] = useState(false);
    const { handleSubmit, register, formState: { errors } } = useForm();
    async function handleFormSubmit(data) {
        setLoading(true);
        toggleError(false);
        /*        data.preventDefault();*/
        const token = localStorage.getItem('token');
        console.log(data);

        /*        let postData = {};*/



        try {
            const response = await axios.post(
                `http://localhost:8080/${type}`,
                data,
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
            toggleAddSuccess(true);
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
        <section className="section-add-new outer-content-container">
            <div className="inner-content-container__text-restriction">
                <h1>Add new {type}</h1>
                {error && <p className="error">{error}</p>}
                {loading && <p>Loading...</p>}
                {addSucces === true && <p>Added successfully</p>}

                <form onSubmit={handleSubmit(handleFormSubmit)} className="add-new-form">
                    <AddNewForm type={type} register={register} errors={errors} />
                    <Button type="submit" disabled={loading}>
                        {loading ? "Adding..." : "Add"}
                    </Button>
                </form>
            </div>
        </section>
    );
}

export default AddNewPage;

