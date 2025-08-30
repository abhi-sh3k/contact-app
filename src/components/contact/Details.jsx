
function Details({user}) {
    
    return (
        <>
            <h4>Details</h4>

            <div>
                <div><p>name :{ user.name}  </p>
                <p>name : {user.email}</p>
                <button>delete</button>
                </div>
            </div>
        </>
    );
}

export default Details;