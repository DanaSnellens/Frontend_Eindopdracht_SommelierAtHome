import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext.jsx";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import AddNewForm from "../../components/addNewForm/AddNewForm.jsx";
import Button from "../../components/button/Button.jsx";


function AddNewPage() {
    const { type } = useParams();
    const navigate = useNavigate();
    const { isAuth, user, username } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [error, toggleError] = useState(null);
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

            const { id } = response.data;
            console.log('Backend response:', response.data);

            if(['clients', 'sommeliers'].includes(type)) {
                navigate(`/${type}/${username}`);
            } else {
                navigate(`/${type}/${id}`);
            }
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


/*
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/AuthContext.jsx";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import * as source from "react-dom/test-utils";
import Input from "../../components/input/Input.jsx";

function AddNewPage(){

    const { type } = useParams();
    const navigate = useNavigate();
    const { user, isAuth, username } = useContext(AuthContext);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, toggleError] = useState(null);
    const {handleSubmit, register, formState: { errors } }= useForm();

    const source = axios.CancelToken.source();

    useEffect(() => {
        return function cleanup() {
            source.cancel();
        };
    }, []);

    async function handleFormSubmit (data) {
        console.log(data)
        toggleError(false);
        setLoading(true);

        let postData = {};

        switch (type) {
            case 'wines':
                postData = {
                    name: data.name,
                    year: data.year,
                    country: data.country,
                    region: data.region,
                    grape: data.grape,
                    price: data.price,
                    description: data.description,
                };
                break;
            case 'recipes':
                postData = {
                    name: data.name,
                    ingredients: data.ingredients,
                    preparation: data.preparation,
                };
                break;
            case 'sommeliers':
                postData = {
                    name: data.name,
                    email: data.email,
                };
                break;
            default:
                console.error('Type not found');
        }

        try {
            await axios.post(`http://localhost:8080/${type}`, {
                ...postData
            }, {
                cancelToken: source.token,
            });
            if (['clients', 'sommeliers'].includes(type)) {
                navigate(`/${type}/${username}`);
            }
            else {
                navigate(`/${type}/id`);
            }
        } catch (error) {
            toggleError(error.message);
        } finally {
            setLoading(false);
        }
    }



    return (
        <>
            <section className="section-add-new outer-content-container">
                <div className="inner-content-container__text-restriction">
                    <h1>Add new {type}</h1>
                    <p>Hier komt in input form voor {type}</p>
                    <form onSubmit={handleSubmit(handleFormSubmit)} className="add-new-form">
                        switch (type) {
                    }

                        <Input
                            type="text"
                            name="name"
                            placeholder="Name"
                            {...register("name", { required: true })}
                        />
                        <Input
                            type="text"
                            name="year"
                            placeholder="Year"
                            {...register("year", { required: true })}
                        />
                        <Input
                            type="text"
                            name="country"
                            placeholder="Country"
                            {...register("country", { required: true })}
                        />
                        <Input
                            type="text"
                            name="region"
                            placeholder="Region"
                            {...register("region", { required: true })}
                        />
                        <Input
                            type="text"
                            name="grape"
                            placeholder="Grape"
                            {...register("grape", { required: true })}
                        />
                        <Input
                            type="text"
                            name="price"
                            placeholder="Price"
                            {...register("price", { required: true })}
                        />
                        <Input
                            type="text"
                            name="description"
                            placeholder="Description"
                            {...register("description", { required: true })}
                        />
                        <button type="submit">Add</button>


                </div>
            </section>
        </>
    )
}
export default AddNewPage;*/
