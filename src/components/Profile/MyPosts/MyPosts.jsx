import { Field, Form, Formik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import s from "./myposts.module.css";
import Post from './Post/Post';

const  MyPosts = React.memo(props =>  {
    let postsElements = props.posts.map(p => <Post key={p.id} post={p} deletePost={props.deletePost} likesCountF={props.likesCountF} />)

    const addNewPost = (values) => {
        props.addPost(values.newPostText)
    }
    return (
        <div>
            <AddNewForm onSubmit={addNewPost} />
            <div>
                New Post
                <div>
                    {postsElements}
                </div>
            </div>
        </div>
    )
})

const AddNewForm = (props) => {
    const validationSchema = yup.object().shape({
        newPostText: yup.string().typeError('Դաշտը պետք է լինի տող').required("Պարտադիր"),
    })
    return (
        <Formik
            initialValues={{
                newPostText: ""
            }}
            onSubmit={(values) => props.onSubmit(values)}
            validationSchema={validationSchema}
        >
            {({ values, errors, touched, isValid, dirty, handleChange, handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                    <Field 
                        className={touched.newPostText && errors.newPostText ? s.err : s.noerr}
                        component="textarea"
                        name="newPostText"
                        value={values.newPostText}
                        onChange={handleChange}
                    />
                    {touched.newPostText && errors.newPostText && <p className={s.errors}>{errors.newPostText}</p>}
                    <button
                        type="submit"
                        disabled={!isValid && !dirty}
                    >addPost</button>
                </Form>
            )}

        </Formik>
    )
}
export default MyPosts