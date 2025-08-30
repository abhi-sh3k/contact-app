import Header from './components/Header';
import Details from './components/contact/Details';
import Add from './components/contact/Add';
import List from './components/contact/List';
import { useEffect, useState } from 'react';

function App() {

const [users, setUser] = useState([]);

useEffect(()=>{
 const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
 setUser(existingUsers);
},[])

function handleAdd(contact){

 const newUser = {id : Date.now(),...contact}
  const updatedUsers = ([...users,newUser]);
  localStorage.setItem("users",JSON.stringify(updatedUsers));
  setUser(updatedUsers);
}

// delete 
function handleDelete(id){
 const filteredUser = users.filter((user)=>{
  return user.id != id
 })

 setUser(filteredUser)
   localStorage.setItem("users",JSON.stringify(filteredUser));
}

  return (
    <>
      <Header />
      <Add handleAdd={handleAdd}/>
      <List users={users} handleDelete={handleDelete}/>
    </>
  )
}

export default App
