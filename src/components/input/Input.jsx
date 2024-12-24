import './Input.css';
import React from "react";

function Input({ name, inputType, labelText, options, validationRules, register, errors }) {

    return (
        <>
            <div className="input-container">
                <label htmlFor={`${name}-field`}>
                    {labelText}
{/*                    {inputType === 'dropdown' ? (
                        <select
                            id={`${name}-field`}
                            {...register(name, validationRules)}
                            className={`form-control ${errors[name] ? 'input-error' : ''}`}
                        >
                            <option value="">Select {labelText}</option>
                            {Object.entries(options).map(([key, value]) => (
                                <option key={key} value={key}>{value}</option>
                            ))}
                        </select>
                    ) : (*/}
                    <input
                        type={inputType}
                        id={`${name}-field`}
                        {...register(name, validationRules)}
                        className={errors[name] ? 'input-error' : ''}
                    />
             {/*           )}*/}
                </label>
                {errors[name] && <p className="error-message">{errors[name].message}</p>}
            </div>
        </>
    );
}

export default Input;