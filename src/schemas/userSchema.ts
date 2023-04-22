import * as yup from 'yup';

export const userValidationSchema = yup.object().shape({
    title: 
        yup
        .string()
        .required("Name title is required"),
    firstName: 
        yup
        .string()
        .required("First name is required"),
    lastName: 
        yup
        .string()
        .required("Last name is required"),
    email: 
        yup
        .string()
        .email()
        .required("Email is required"),
    streetName: 
        yup
        .string()
        .required("Street name is required"),
    streetNumber: 
        yup
        .number()
        .positive("Street number must be a positive number")
        .required("Street number is required"),
    city: 
        yup
        .string()
        .required("City is required"),
    country: 
        yup
        .string()
        .required("Country is required")
})