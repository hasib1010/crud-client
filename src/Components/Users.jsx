import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {
    const users = useLoaderData();
    const handleDelete = (_id) => {
        console.log(_id);
        fetch(`http://localhost:5000/users/${_id}`, {
            method: "DELETE",

        })
            .then(res => res.json())
            .then(data => {

                console.log(data);
                if (data.deletedCount > 0) {
                    alert("delete successfully")
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
                        {user.name}: {user.email}
                        <button
                            onClick={() => handleDelete(user._id)}
                        >Delete</button>
                        {user._id}</p>)
            }
        </div>
    );
};

export default Users;