import React from 'react';
import {useSelector} from 'react-redux';
import ContactItem from "./ContactItem.jsx";
import styles from './ContactList.module.css';

export default function ContactList() {
    const contacts = useSelector((state) => state.contacts.items);
    const filter = useSelector((state) => state.filters.name.toLowerCase());

    const filteredContacts = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter)
    );

    return (
        <ul className={styles['contact-list']}>
            {filteredContacts.map((contact) => (
                <li key={contact.id}>
                    <ContactItem contact={contact}/>
                </li>
            ))}
        </ul>
    );
}