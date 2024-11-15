import { useForm } from "react-hook-form";
import Input from "../input/Input.jsx";
import Button from "../button/Button.jsx";

function NewRequestPage () {

    const { register, handleSubmit, formState: { errors } } = useForm();
    function  handleFormSubmit(data) {
        console.log(data);
    }

    return (
        <>
            <h1>Aanvraag wijnadvies</h1>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <Input
                    name ="firstName"
                    labelText="Voornaam"
                    inputType="text"
                    validationRules={{ required: 'Voornaam is verplicht' }}
                    register={register}
                    errors={errors}
                />
                <Input
                    name ="lastName"
                    labelText="Achternaam"
                    inputType="text"
                    validationRules={{ required: 'Achternaam is verplicht' }}
                    register={register}
                    errors={errors}
                />
                <Input
                    name="profilePictureUrl"
                    labelText="Link naar profielfoto"
                    inputType="text"
                    inputName="profilePictureUrl"
                    validationRules={{ required: false }}
                    register={register}
                    errors={errors}
                />

                <Button type="submit" text="Bevestigen" />
            </form>


        </>
    )
}
export default NewRequestPage;