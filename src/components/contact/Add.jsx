import { useState } from "react";

function Add() {

    const [contact, updateContact] = useState({name : '', email : ''});

    function addContact(e) {
        e.preventDefault();
        console.log(e);
        
        if (e.target.input.name === '' || e.target.email === '') {
            console.log("any")
            alert('All fields are mandatory');
            return ;
        }
        console.log("here");
        
        updateContact({});
    }
    return (
        <>
            <h1>Add Contact</h1>
            <form onSubmit={addContact}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={contact.name} onChange={(e) => updateContact({name: e.target.value})} />
                
                <label htmlFor="email">Email</label>
                <input type="text" id="email"  value={contact.email} onChange={(e) => updateContact({email : e.target.value})} />

                <button type="submit">Add</button>
            </form>
        </>
    );
}

export default Add;