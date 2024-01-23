import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {
    const LoadedUsers = useLoaderData();
    const [users, setUsers] = useState(LoadedUsers)
    const handleDelete = (_id) => {
        console.log(_id);
        fetch(`http://localhost:5000/users/${_id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    // alert("delete successfully")
                    const newUsers = users.filter(user => user._id !== _id)
                    setUsers(newUsers);
                }
            })

    }
    return (
        <div>
            <Link to={'/'}>Home</Link> <br />

            User Collection {users.length}
            {
                users.map(user =>
                    <p key={user._id}>
                        <Link to={`/update/${user._id}`}>Update</Link> <br /> {user.email}  <br /> {user.name}
                        <button
                            onClick={() => handleDelete(user._id)}
                        >Delete</button>
                        {user._id}</p>)
            }
        </div>
    );
};

export default Users;