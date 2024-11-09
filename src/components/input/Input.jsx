import './Input.css';

function Input({ name, inputType, labelText, validationRules, register, errors }) {

    return (
        <>
            <label htmlFor={`${name}-field`}>
                {labelText}
                <input
                    type={inputType}
                    id={`${name}-field`}
                    {...register(name, validationRules)}
                />
            </label>
            {errors[name] && <p className="error-message">{errors[name].message}</p>}
        </>
    );
}

export default Input;