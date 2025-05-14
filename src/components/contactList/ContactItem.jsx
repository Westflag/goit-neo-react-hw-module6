import React from 'react';
import {useDispatch} from 'react-redux';
import {deleteContact} from '../../redux/contactsSlice';
import PropTypes from 'prop-types';
import styles from './ContactItem.module.css';

export default function ContactItem({contact}) {
    const dispatch = useDispatch();

    return (
        <div className={styles.contact}>
            <p>👤 {contact.name}</p>
            <p>📞 {contact.number}</p>
            <button onClick={() => dispatch(deleteContact(contact.id))}>Delete</button>
        </div>
    );
}

ContactItem.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }).isRequired,
};
