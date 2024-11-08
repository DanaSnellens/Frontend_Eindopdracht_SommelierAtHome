import './Input.css';

function Input({ labelText, name, handleChange, required, type, formStateValue }) {
    const labelInputLink = `wine-${name}`;

    return (
        <>
            <label htmlFor={labelInputLink}>{labelText}</label>
            <input
                type={type}
                id={labelInputLink}
                name={name}
                required={required}
                value={formStateValue}
                onChange={handleChange}
            />
        </>
    );
}

export default Input;