import React from 'react';
import Input from '../../components/input/Input';

function AddNewForm({ type, register, errors }) {
    const formConfig = {
        wines: [
            { name: "name", labelText: "Name", inputType: "text", validationRules: { required: "Name is required" } },
            { name: "year", labelText: "Year", inputType: "text", validationRules: { required: "Year is required" } },
            { name: "country", labelText: "Country", inputType: "text", validationRules: { required: "Country is required" } },
            { name: "region", labelText: "Region", inputType: "text", validationRules: { required: "Region is required" } },
            { name: "grape", labelText: "Grape", inputType: "text", validationRules: { required: "Grape is required" } },
            { name: "price", labelText: "Price", inputType: "text", validationRules: { required: "Price is required" } },
            { name: "description", labelText: "Description", inputType: "text", validationRules: { required: "Description is required" } },
        ],
        recipes: [
            { name: "name", labelText: "Name", inputType: "text", validationRules: { required: "Name is required" } },
            { name: "ingredients", labelText: "Ingredients", inputType: "text", validationRules: { required: "Ingredients are required" } },
            { name: "preparation", labelText: "Preparation", inputType: "text", validationRules: { required: "Preparation is required" } },
        ],
        sommeliers: [
            { name: "name", labelText: "Name", inputType: "text", validationRules: { required: "Name is required" } },
            { name: "email", labelText: "Email", inputType: "email", validationRules: { required: "Email is required", pattern: { value: /^[^@]+@[^@]+\.[^@]+$/, message: "Invalid email format" } } },
        ],
    };

    const fields = formConfig[type] || [];

    return (
        <>
            {fields.map(({ name, labelText, inputType, validationRules }) => (
                <Input
                    key={name}
                    name={name}
                    labelText={labelText}
                    inputType={inputType}
                    validationRules={validationRules}
                    register={register}
                    errors={errors}
                />
            ))}
        </>
    );
}

export default AddNewForm;
