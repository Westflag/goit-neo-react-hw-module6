import React, {useEffect, useState} from 'react';
import ContactForm from './components/contactForm/ContactForm';
import SearchBox from './components/searchBox/SearchBox';
import ContactList from './components/contactList/ContactList';
import styles from './App.module.css';

const LOCAL_STORAGE_KEY = 'phonebook_contacts';

const initialContacts = [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
];

export default function App() {
    const [contacts, setContacts] = useState(() => {
        const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
        return stored ? JSON.parse(stored) : initialContacts;
    });

    const [filter, setFilter] = useState('');

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }, [contacts]);

    const handleAddContact = (newContact) => {
        const exists = contacts.some(
            (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
        );
        if (exists) {
            alert(`${newContact.name} is already in contacts.`);
            return;
        }
        setContacts((prev) => [...prev, newContact]);
    };

    const handleDeleteContact = (id) => {
        setContacts((prev) => prev.filter((c) => c.id !== id));
    };

    const handleFilterChange = (value) => setFilter(value);

    const filteredContacts = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div className={styles.container}>
            <h1>Phonebook</h1>
            <ContactForm onAdd={handleAddContact}/>
            <SearchBox value={filter} onChange={handleFilterChange}/>
            <ContactList contacts={filteredContacts} onDelete={handleDeleteContact}/>
        </div>
    );
}
