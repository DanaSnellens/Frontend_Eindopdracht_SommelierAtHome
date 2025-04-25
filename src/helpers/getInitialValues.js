import formConfig from "./formConfig";

export const getInitialValues = (type, existingData = {}) => {
    const fields = formConfig[type] || [];
    return fields.reduce((acc, field) => {
        acc[field.name] = existingData[field.name] || "";
        return acc;
    }, {});
};
