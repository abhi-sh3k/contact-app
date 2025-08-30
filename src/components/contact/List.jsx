import Details from "./Details";

function List({users}) {
    
    return (
        <>
            <h3>List</h3>

            <div>
               
            {users.map((user)=>(
                
                <Details user={user}/>
            )
            )}
            </div>
        </>
    );
}

export default List;