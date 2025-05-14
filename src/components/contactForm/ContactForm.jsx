import React from 'react';
import {useDispatch} from 'react-redux';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import {nanoid} from 'nanoid';
import * as Yup from 'yup';
import {addContact} from '../../redux/contactsSlice';
import styles from './ContactForm.module.css';

const schema = Yup.object().shape({
    name: Yup.string().min(3).max(50).required('Required'),
    number: Yup.string().min(3).max(50).required('Required'),
});

export default function ContactForm() {
    const dispatch = useDispatch();

    return (
        <Formik
            initialValues={{name: '', number: ''}}
            validationSchema={schema}
            onSubmit={(values, actions) => {
                dispatch(addContact({id: nanoid(), ...values}));
                actions.resetForm();
            }}
        >
            <Form className={styles.form}>
                <label>
                    Name
                    <Field name="name" type="text"/>
                    <ErrorMessage name="name" component="div" className={styles.error}/>
                </label>
                <label>
                    Number
                    <Field name="number" type="text"/>
                    <ErrorMessage name="number" component="div" className={styles.error}/>
                </label>
                <button type="submit">Add contact</button>
            </Form>
        </Formik>
    );
}