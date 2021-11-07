import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
const MakeAdmin = () => {
    const [ email, setEmail ] = useState(' ')
    const [ success, setSuccess ] = useState(false)
    const {token}= useAuth()

    const handleOnBlur = e => {
        
        setEmail(e.target.value);
       
    }

    const handleAdmin = e => {
        e.preventDefault()
        const user={email}
         fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
             headers: {
                'authorization':`Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
             .then(data => {
                 if (data.modifiedCount)
                 {
                     setSuccess(true)
                     
                }
           
        })
    }
    return (
        <div>
            <h1>Make An Admin</h1>
            <form onClick={handleAdmin}>
                <TextField
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                    onBlur={handleOnBlur}
                    type="email"
                    name="email"
                />
                <Button variant="contained" type="submit">Make Admin</Button>
            </form>
            <Alert severity="success">add successfully</Alert>
        </div>
    );
};

export default MakeAdmin;