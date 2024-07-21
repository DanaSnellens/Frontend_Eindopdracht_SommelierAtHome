import styles from './Input.module.css';

function Input({ labelText, name, handleChange, required, type, formStateValue }) {
    const labelInputLink = `post-${name}`;

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