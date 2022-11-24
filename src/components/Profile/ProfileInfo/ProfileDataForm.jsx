import { Formik, Field, Form } from "formik"
import s from "../profile.module.css";
import * as yup from 'yup';

const ProfileDataForm = (props) => {
    const validationSchema = yup.object().shape({
        fullName : yup.string().typeError('Դաշտը պետք է լինի տող').required("Պարտադիր"),
    })
    return (
        <Formik
            initialValues={{
                fullName : "",
                lookingForAJob : false,
                LookingForAJobDescription : "",
                aboutMe : ""
            }}
            onSubmit={(values) => { props.onSubmit(values) }}
            validationSchema={validationSchema}
        >
            {({ values, errors, touched, isValid, dirty, handleChange, handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                    <button
                        type="submit"
                        disabled={!isValid && !dirty}>
                            Save
                    </button>
                    <br/>
                    <span>Change Name </span>
                    <Field
                        className={touched.fullName && errors.fullName ? s.err : s.noerr}
                        component="input"
                        name="fullName"
                        value={values.fullName}
                        onChange={handleChange}
                    />
                    {touched.fullName && errors.fullName && <p className={s.errors}>{errors.fullName}</p>}
                    <br/>
                    <span> looking For A Job </span>
                    <Field
                        className={touched.lookingForAJob && errors.lookingForAJob ? s.err : s.noerr}
                        component="input"
                        type="checkbox"
                        name="lookingForAJob"
                    />
                    {touched.lookingForAJob && errors.lookingForAJob && <p className={s.errors}>{errors.lookingForAJob}</p>}
                    <br/>
                    <span>Change lokig from slils </span>
                    <Field
                        className={touched.LookingForAJobDescription && errors.LookingForAJobDescription ? s.err : s.noerr}
                        component="input"
                        name="LookingForAJobDescription"
                        value={values.LookingForAJobDescription}
                        onChange={handleChange}
                    />
                    {touched.LookingForAJobDescription && errors.LookingForAJobDescription && <p className={s.errors}>{errors.LookingForAJobDescription}</p>}


                    <br/>
                    <span>Change about me </span>
                    <Field
                        className={touched.aboutMe && errors.aboutMe ? s.err : s.noerr}
                        component="input"
                        name="aboutMe"
                        value={values.aboutMe}
                        onChange={handleChange}
                    />
                    {touched.aboutMe && errors.aboutMe && <p className={s.errors}>{errors.aboutMe}</p>}
                </Form>
            )}

        </Formik>
    )
}

export default ProfileDataForm
