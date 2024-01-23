import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const loadedUser = useLoaderData();
    const handleUpdate =(e)=>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const name = form.name.value;
        const user = {email, name};
        console.log(user);
    }
    return (
        <div>
            <p>Update Data of {loadedUser.name}</p>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={loadedUser?.name} /> <br />
                <input type="email" name='email' defaultValue={loadedUser?.email} /><br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;