import React from 'react'
import Nature from './User.png';
 const ContactCard = (props) => {
     const {id,name,email} = props.contact;
    return (
        <div className = "item">
            <img className = "ui avatar image" src  = {Nature} alt= "Nature"/>
        <div className = "content">  
            <div className = "header"> 
{name}
            </div>
            <div>{email}</div>
        </div>
        <i className = "trash alternate outline icon" 
        style = {{color:"red", marginTop:'7px'}}
        onClick = {() => props.clickHander(id)}
        />
    </div>
)
    
}
export default ContactCard;