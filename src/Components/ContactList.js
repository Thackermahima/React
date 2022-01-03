import React from 'react'
import ContactCard from './ContactCard';

 const ContactList = (props) => {
     const deleteHandler = (id) => {
         props.getContactId(id);
     }
     const renderContactList = props.contacts.map((contact)=>{
         return(
             <ContactCard  contact = {contact} clickHander = {deleteHandler}/>
         )
     });
    return (
        <div className = "ui celled list">
         {renderContactList}
     </div>
    )
}
export default ContactList 