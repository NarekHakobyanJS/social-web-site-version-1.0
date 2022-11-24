import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import React from 'react'
import s from "./dialogs.module.css"
import DialogsItem from './DialogsItem/DialogsItem';
import Messages from './Messages/Messages';

function Dialogs(props) {
    let state = props.dialogsPage
    let dialogsElements = state.dialogs.map(d => <DialogsItem name={d.name} id={d.id} />)
    let messagesElements = state.messages.map(m => <Messages message={m.message} />)


    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <MessageForm onSubmit={addNewMessage} />
                <div>
                    {messagesElements}
                </div>

            </div>
        </div>
    )
}

const MessageForm = (props) => {
    const validationSchema = yup.object().shape({
        newMessageBody: yup.string().typeError('Դաշտը պետք է լինի տող').required("Պարտադիր"),
    })
    return <Formik
        initialValues={{
            newMessageBody: ""
        }}
        onSubmit={(values) => { props.onSubmit(values) }}
        validationSchema={validationSchema}
    >
        {({ values, errors, touched, isValid, dirty, handleChange, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
                <Field
                    className={touched.newMessageBody && errors.newMessageBody ? s.err : s.noerr}
                    component="textarea"
                    name="newMessageBody"
                    value={values.newMessageBody}
                    onChange={handleChange}
                />
                {touched.newMessageBody && errors.newMessageBody && <p className={s.errors}>{errors.newMessageBody}</p>}
                <button
                    type="submit"
                    disabled={!isValid && !dirty}
                >SendMessage</button>
            </Form>
        )}

    </Formik>
}

export default Dialogs