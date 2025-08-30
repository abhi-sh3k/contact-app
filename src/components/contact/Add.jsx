import { useState } from "react";

function Add({handleAdd}) {

    const [contact, updateContact] = useState({name : '', email : ''});


    // change 
    
    function handleChange(e){
        const {name , value} = e.target;
        updateContact({...contact, [name] : value})    
    }

    // add
    function addContact(e) {
        e.preventDefault();
        
        if (contact.name === '' || contact.email === '') {
            alert('All fields are mandatory');
            return ;
        }

        handleAdd(contact);

        updateContact({name : '', email : ''})
    }
    return (
        <div className="">
            <h1>Add Contact</h1>
            <form onSubmit={addContact}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={contact.name} name="name" onChange={handleChange} />
                
                <label htmlFor="email">Email</label>
                <input type="text" id="email"  value={contact.email} name="email" onChange={handleChange} />

                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default Add;