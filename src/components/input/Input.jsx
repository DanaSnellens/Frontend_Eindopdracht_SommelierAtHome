import './Input.css';
import React from "react";

function Input({ name, inputType, labelText, validationRules, register, errors }) {

    return (
        <>
            <div className="input-container">
                <label htmlFor={`${name}-field`}>
                    {labelText}
                    <input
                        type={inputType}
                        id={`${name}-field`}
                        {...register(name, validationRules)}
                        className={errors[name] ? 'input-error' : ''}
                    />
                </label>
                {errors[name] && <p className="error-message">{errors[name].message}</p>}
            </div>
        </>
    );
}

export default Input;