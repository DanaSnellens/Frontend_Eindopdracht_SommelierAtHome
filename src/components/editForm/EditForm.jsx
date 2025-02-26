import React, {useState} from 'react';
import Input from '../../components/input/Input';
import {getInitialValues} from "../../helpers/getInitialValues.js";
import formConfig from "../../helpers/formConfig.js";

function EditForm({ type, register, errors, initialValues }) {
    const [formValues, setFormValues] = useState(getInitialValues(type, existingData));


    return (
        <>
            {formConfig[type].map((field/*{ name, labelText, inputType, options, validationRules }*/) => (
                <Input
                    key={field.name}
                    name={field.name}
                    labelText={field.labelText}
                    inputType={field.inputType}
                    options={field.options}
                    validationRules={field.validationRules}
                    register={field.register}
                    errors={field.errors}
                    value={formValues[field.name]}
                    onChange={(e) => setFormValues({ ...formValues, [field.name]: e.target.value })}
                />
            ))}
        </>
    );
}

export default EditForm;
