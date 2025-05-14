import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from "./ContactItem.jsx";
import styles from './ContactList.module.css';

export default function ContactList({contacts, onDelete}) {
    return (
        <ul className={styles['contact-list']}>
            {contacts.map((contact) => (
                <li key={contact.id}>
                    <ContactItem contact={contact} onDelete={onDelete}/>
                </li>
            ))}
        </ul>
    );
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ).isRequired,
    onDelete: PropTypes.func.isRequired,
};