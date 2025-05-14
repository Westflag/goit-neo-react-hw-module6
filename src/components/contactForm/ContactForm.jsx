import React from 'react';
import PropTypes from 'prop-types';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import {nanoid} from 'nanoid';
import * as Yup from 'yup';
import styles from './ContactForm.module.css';

const schema = Yup.object().shape({
    name: Yup.string().min(3).max(50).required('Required'),
    number: Yup.string().min(3).max(50).required('Required'),
});

export default function ContactForm({onAdd}) {
    return (
        <Formik
            initialValues={{name: '', number: ''}}
            validationSchema={schema}
            onSubmit={(values, actions) => {
                onAdd({id: nanoid(), ...values});
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

ContactForm.propTypes = {
    onAdd: PropTypes.func.isRequired,
};