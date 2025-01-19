import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import Input from "../../components/input/Input.jsx";
import "./SignUpPage.css";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Button from "../../components/button/Button.jsx";

function SignUpPage() {
    const {
        handleSubmit,
        register,
        formState: { errors },
        watch,
    } = useForm();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const password = watch('password');

    const source = axios.CancelToken.source();
/*    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");*/

    useEffect(() => {
        return function cleanup() {
            source.cancel();
        };
    }, []);

    async function handleFormSubmit(data) {
        console.log(data)
        setError(false);
        setLoading(true);

        try {
            const response = await axios.post('http://localhost:8080/register', {
                email: data.email,
                username: data.username,
                password: data.password,
            },{
                cancelToken: source.token,
            });
            console.log(response.data);
            navigate('/signin');
        } catch (e) {
            console.error(e);
            setError('Er is iets misgegaan bij het aanmaken van je account. Probeer het later opnieuw.');
        } finally {
            setLoading(false);
        }
    }
  return (
    <>
        <section className="section-sign-up outer-content-container">
            <div className="inner-content-container__text-restriction">
                <h1>Sign Up</h1>
                    <p>Om gebruik te kunnen maken van persoonlijk wijnadvies bij uw recepten heeft u een account nodig
                        U kunt kiezen voor een eenmalig wijnadvies (zonder membership) of een membership afsluiten voor regelmatig wijnadvies.
                        De kosten voor een eenmalig wijnadvies zijn 9.95 euro per recept. Met een membership kunt u voor een vast maandelijks bedrag
                        meerdere recepten uploaden en wijnadvies ontvangen. Er is de keuze uit verschillende memberships:
                    </p>
                    <ul>
                        <li>Basic: 3 recepten & wijnadviezen voor 9.95 euro per maand </li>
                        <li>Regular: 6 recepten & wijnadviezen voor 14.95 euro per maand</li>
                        <li>Premium: 9 recepten & wijnadviezen voor 19.95 euro per maand</li>
                    </ul>

                <form onSubmit={handleSubmit(handleFormSubmit)} className= "sign-up-form">
                    <Input
                                labelText="Username"
                                name="username"
                                register={register}
                                validation={{ required: "Username is required" }}
                                errors={errors}
                            />

                            <Input
                                labelText="First Name"
                                name="firstName"
                                register={register}
                                validation={{ required: "First Name is required" }}
                                errors={errors}
                            />

                            <Input
                                labelText="Last Name"
                                name="lastName"
                                register={register}
                                validation={{ required: "Last Name is required" }}
                                errors={errors}
                            />

                            <Input
                                labelText="Email"
                                name="email"
                                type="email"
                                register={register}
                                validation={{
                                    required: "Email is required",
                                    pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
                                }}
                                errors={errors}
                            />

                            <Input
                                labelText="Profile Picture URL"
                                name="profilePictureUrl"
                                type="url"
                                register={register}
                                validation={{
                                    required: "Profile Picture URL is required",
                                    pattern: {
                                        value: /^(http|https):\/\/[^ "]+$/,
                                        message: "Invalid URL",
                                    },
                                }}
                                errors={errors}
                            />

                            <div>
                                <label htmlFor="membership">Membership</label>
                                <select
                                    id="membership"
                                    {...register("membership", { required: "Membership is required" })}
                                    className={errors.membership ? "error" : ""}
                                >
                                    <option value="">Select Membership</option>
                                    <option value="none">None</option>
                                    <option value="basic">Basic</option>
                                    <option value="regular">Regular</option>
                                    <option value="premium">Premium</option>
                                </select>
                                {errors.membership && (
                                    <p className="error-message">{errors.membership.message}</p>
                                )}
                            </div>

                            <Input
                                labelText="Password"
                                name="password"
                                type="password"
                                register={register}
                                validation={{
                                    required: "Password is required",
                                    minLength: {
                                        value: 8,
                                        message: "Password must be at least 8 characters long",
                                    },
                                }}
                                errors={errors}
                            />

                            <Input
                                labelText="Confirm Password"
                                name="passwordCheck"
                                type="password"
                                register={register}
                                validation={{
                                    required: "Password confirmation is required",
                                    validate: (value) =>
                                        value === password || "Passwords do not match",
                                }}
                                errors={errors}
                            />

                            <div className="checkbox-container">
                                <label>
                                    <input type="checkbox" {...register("newsletter")} />
                                    I want to receive newsletters
                                </label>
                            </div>

                            <Button type="submit" disabled={loading}>Sign Up</Button>
                </form>
            </div>
        </section>
    </>
  );
}

export default SignUpPage;