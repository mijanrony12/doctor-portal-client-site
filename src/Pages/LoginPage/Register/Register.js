import { Button, CircularProgress, Container, Grid, TextField, Typography,Alert} from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import login from '../../../images/login.png'

const Register = () => {
    const {error,user,registerUser,isLoading}=useAuth()
      const [loginData, setLoginData]=useState({})
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[ field ] = value;
        setLoginData(newLoginData)
        console.log(newLoginData)
        
    }
    const handleLogin = e => {
          e.preventDefault()
        if (loginData.password !== loginData.password2)
        {
            alert('password invalid');
            return
        }
      registerUser(loginData.email, loginData.password)
    }
    return (
        <Container>
                   <Grid container spacing={2}>
                        <Grid item xs={12} md={6} sx={{mt:8,textAlign:'center'}}>
                               <Typography sx={{textAlign:'center'}} variant="body1" gutterBottom>
                                          Register
                              </Typography>
                              { !isLoading && <form onSubmit={handleLogin}>
                                <TextField
                                        sx={{width:'75%',m:1}}
                                        id="standard-basic"
                                        label="Your Email"
                                        type="email"
                                        name="email"
                                        onChange={handleOnChange}
                                        variant="standard"
                                     />
                                 <TextField
                                         sx={{width:'75%',m:1}}
                                        id="outlined-password-input"
                                        label="Your Password"
                                        type="password"
                                        name="password"
                                        required
                                        onChange={handleOnChange}
                                        autoComplete="current-password"
                                        variant="standard"
                                   />
                                 <TextField
                                         sx={{width:'75%',m:1}}
                                        id="outlined-password-input"
                                        label="Re- Password"
                                        type="password"
                                        name="password2"
                                        onChange={handleOnChange}
                                        autoComplete="current-password"
                                        variant="standard"
                                     />
                                { error && <Alert severity="error">{ error }</Alert> }
                                {user?.email && <Alert severity="success">user created successfully</Alert>}
                               <Button type="submit" sx={ { width: '75%', m: 1 } } variant="contained">Register</Button>
                                   <NavLink
                                 style={ { textDecoration: 'none'} }
                                       to="/login"
                                        >
                                            <Button  variant="text">Already have an Account? Please login</Button>
                                 </NavLink>
                        </form> }
                        { isLoading && <CircularProgress /> }
                       
                        </Grid>
                        <Grid item xs={12} md={6}>
                                <img style={{width:'100%', height: '75%'}} src={login} alt="" />
                        </Grid>
  
               </Grid>
        </Container>
    );
};

export default Register;