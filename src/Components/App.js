import './App.css';
import React, { useState, useEffect } from 'react'; 
import AddContact from './AddContact';
import Header from './Header';
import ContactList from './ContactList';
function App() {
    const LOCAL_KEY = "contact";
    const [contacts, setContacts] = useState([]);
    const addContactHandler = (contact) => {
        console.log(contact);
        setContacts([...contacts, contact]);
    }
    const removeContactHandler = (id) => {
        const newContactList = contacts.filter((contact) => {
          return contact.id !== id;
        });
    
        setContacts(newContactList);
      };
    useEffect(() => {
      const retrieve = JSON.parse(localStorage.getItem(LOCAL_KEY));
      if(retrieve) setContacts(retrieve);
    }, [])
    useEffect(() => {
        localStorage.setItem(LOCAL_KEY, JSON.stringify(contacts));
    }, [contacts])
    return (
        <div className="ui container">
            <h2>Hello</h2>
            <Header />
            <AddContact addContactHandler={addContactHandler} />
            <ContactList contacts={contacts} getContactId = {removeContactHandler} />
        </div>

    )
}


export default App;
