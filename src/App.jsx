import React from 'react';
import ContactForm from './components/contactForm/ContactForm';
import SearchBox from './components/searchBox/SearchBox';
import ContactList from './components/contactList/ContactList';
import styles from './App.module.css';

export default function App() {
    return (
        <div className={styles.container}>
            <h1>Phonebook</h1>
            <ContactForm/>
            <SearchBox/>
            <ContactList/>
        </div>
    );
}
