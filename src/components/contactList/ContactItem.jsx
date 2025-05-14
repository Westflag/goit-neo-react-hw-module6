import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactItem.module.css';

export default function ContactItem({contact, onDelete}) {
    return (
        <div className={styles.contact}>
            <p>👤 {contact.name}</p>
            <p>📞 {contact.number}</p>
            <button onClick={() => onDelete(contact.id)}>Delete</button>
        </div>
    );
}

ContactItem.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
};