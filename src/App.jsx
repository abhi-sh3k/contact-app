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
  // const updatedUsers = ([...users, contact]);
    setUser([...users,contact]);
  localStorage.setItem("users",JSON.stringify(updatedUsers));

}

// 
  return (
    <>
      <Header />
      <Add handleAdd={handleAdd}/>
      <List users={users}/>
    </>
  )
}

export default App
