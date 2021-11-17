import { Button, Input, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddDoctor = () => {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ image, setImage ] = useState(null);

   
    const handleSubmit = e => {
        e.preventDefault()
        if (!image)
        {
            return
        }
        const formData = new FormData();
        formData.append('name', name)
        formData.append('email', email)
        formData.append('image', image)

        fetch('https://infinite-sea-38686.herokuapp.com/doctors', {
            method: 'POST',
            body: formData
            })
            .then(response => response.json())
            .then(result => {
                  if(result.insertedId){
                      alert('your doctor successfully added')
                      setName('')
                      setEmail('')
                      setImage(null)
                  }
            })
            .catch(error => {
            console.error('Error:', error);
            });
    }


    return (
        <div>
            <h1>Please Add a Doctor</h1>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="name"
                    type="name"
                    required
                    onChange={e=> setName(e.target.value)}
                    variant="standard" />
                <br/>
                <TextField
                    label="Email"
                    type="email"
                    required
                    onChange={e=> setEmail(e.target.value)}
                    variant="standard" />
                <br />
                <Input accept="image/*"
                    type="file"
                    onChange={e=> setImage(e.target.files[0])}
                /> <br />
                <Button variant="contained" type="submit">
                    Add Doctor
                </Button>
            </form>
        </div>
    );
};

export default AddDoctor;