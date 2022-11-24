import React from 'react'
import { connect } from 'react-redux';
import { login } from '../../redux/authReducer';
import { Field, Form, Formik } from 'formik';
import { Navigate } from 'react-router-dom';
import * as yup from 'yup';
import s from "./login.module.css";

function Login(props) {
  let onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe)
  }

  if (props.isAuth) {
    return <Navigate to="/profile" />
  }
  return (
    <div className={s.login}>
      <h1>LoginPage</h1>
      <LoginForm onSubmit={onSubmit} captcha={props.captcha} />
    </div>
  )
}



const LoginForm = (props) => {
  const validationSchema = yup.object().shape({
    login: yup.string().typeError().required("Պարտադիր"),
    password: yup.string().typeError().required("Պարտադիր"),
  })


  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        rememberMe: false,
      }}
      onSubmit={(values) => { props.onSubmit(values) }}
      validationSchema={validationSchema}
      validateOnBlur
    >
      {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
        <Form onSubmit={handleSubmit} >
          <div>
            <h3>login</h3>
            <Field
              type="text"
              component="input"
              name="email"
              onChange={handleChange}
              value={values.email}
              onBlur={handleBlur}
            />
            {touched.email && errors.email && <p className={s.error}>{errors.email}</p>}
          </div>
          <div>
            <h3>Password</h3>
            <Field
              type="text"
              component="input"
              name="password"
              onChange={handleChange}
              value={values.password}
              onBlur={handleBlur}
            />
            {touched.password && errors.password && <p className={s.error}>{errors.password}</p>}
          </div>
          <div>
            <Field
              component="input"
              type='checkbox'
              name="rememberMe"
            /> remember me
          </div>
          <div>
            <button
              disabled={!isValid && !dirty}
              type='submit'
            >login</button>
          </div>
          {props.captcha && <img src={props.captcha} />}
        </Form>
      )}

    </Formik>
  )
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    captcha: state.auth.captchaUrl,

  }
}

export default connect(mapStateToProps, { login })(Login)