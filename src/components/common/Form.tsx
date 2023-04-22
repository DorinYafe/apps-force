import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';

import { ButtonsContainer } from './Button';
import { User } from '../../interfaces/user';
import { userValidationSchema } from '../../schemas/userSchema';

interface Props {
    user: User | null;
    isClosed: () => void;
}

const Form = ({ user, isClosed }: Props) => {
    const initialValues = {
        title: user?.name.title,
        firstName: user?.name.first,
        lastName: user?.name.last,
        email: user?.email,
        streetName: user?.location.street.name,
        streetNumber: user?.location.street.number,
        city: user?.location.city,
        country: user?.location.country,
    };

    const renderError = (message: string) => <p className="help is-danger">{message}</p>;

    const onSubmit = (values: {}) => {
        alert(JSON.stringify(values, null, 2));
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={userValidationSchema}
            onSubmit={async (values, { resetForm }) => {
                await onSubmit(values);
                resetForm();
            }}
        >
            <FormikForm>
                <div
                    className="container"
                    style={{
                        width: "90%",
                    }}
                >
                    <div className="field">
                        <label className="label" htmlFor="title">
                            Full name
                        </label>
                        <div className="control">
                            <Field
                                name="title"
                                type="text"
                                className="input"
                                placeholder="Name title"
                            />
                        </div>
                        <div style={{ display: "flex" }}>
                            <div className="control">
                                <Field
                                    name="firstName"
                                    type="text"
                                    className="input"
                                    placeholder="First name"
                                />
                            </div>
                            <div className="control">
                                <Field
                                    name="lastName"
                                    type="text"
                                    className="input"
                                    placeholder="Last name"
                                />
                            </div>
                        </div>
                        <ErrorMessage name="title" render={renderError} />
                        <ErrorMessage name="firstName" render={renderError} />
                        <ErrorMessage name="lastName" render={renderError} />
                    </div>

                    <div className="field">
                        <label className="label" htmlFor="email">
                            Email address
                        </label>
                        <div className="control">
                            <Field
                                name="email"
                                type="text"
                                className="input"
                                placeholder="Email address"
                            />
                            <ErrorMessage name="email" render={renderError} />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label" htmlFor="streetName">
                            Location
                        </label>
                        <div style={{ display: "flex" }}>
                            <div className="control">
                                <Field
                                    name="streetName"
                                    type="text"
                                    className="input"
                                    placeholder="Street name"
                                />
                            </div>
                            <div className="control">
                                <Field
                                    name="streetNumber"
                                    type="number"
                                    className="input"
                                    placeholder="Street number"
                                />
                            </div>
                        </div>
                        <ErrorMessage name="streetName" render={renderError} />
                        <ErrorMessage name="streetNumber" render={renderError} />

                        <div className="control">
                            <Field
                                name="city"
                                type="text"
                                className="input"
                                placeholder="City"
                            />
                            <ErrorMessage name="city" render={renderError} />
                        </div>
                        <div className="control">
                            <Field
                                name="country"
                                type="text"
                                className="input"
                                placeholder="Country"
                            />
                            <ErrorMessage name="country" render={renderError} />
                        </div>
                    </div>

                    <ButtonsContainer>
                        <button type="submit" className="button is-primary">
                            Submit
                        </button>
                        <button type="button" className="button" onClick={isClosed}>Close</button>
                    </ButtonsContainer>
                </div>
            </FormikForm>
        </Formik>
    )
};

export { Form };