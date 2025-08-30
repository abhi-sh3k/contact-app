import Details from "./Details";

function List({users,handleDelete}) {
  
    function removeContact(contactID){
        handleDelete(contactID);
        
        
    }
    return (
        <>
            <h3>List</h3>

            <div>
               
            {users.map((user)=>(
                
                <Details user={user} removeContact={removeContact} key={user.id} />
            )
            )}
            </div>
        </>
    );
}

export default List;