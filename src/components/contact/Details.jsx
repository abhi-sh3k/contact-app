
function Details({user,removeContact}) {
    
    return (
        <>
            <h4>Details</h4>

            <div>
                <div><p>name :{ user.name}  </p>
                <p>name : {user.email}</p>
                <button onClick={()=>removeContact(user.id)}> delete</button>
                </div>
            </div>
        </>
        
    );
}

export default Details;