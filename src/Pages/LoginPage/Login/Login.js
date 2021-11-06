import { Alert, Button, Container, Grid, TextField, Typography,CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import { NavLink,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import login from '../../../images/login.png'
const Login = () => {
    const {error,user,loginUser,isLoading,signInWithGoogle}=useAuth()
    const [ loginData, setLoginData ] = useState({});

    const location = useLocation()
    const history = useHistory()
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[ field ] = value;
        setLoginData(newLoginData)
        
    }
    const handleLogin = e => {
       
        e.preventDefault()
        loginUser(loginData.email, loginData.password,location, history)
    }

    const handleGoogleLogin = () => {
        signInWithGoogle(location, history)
    }
    return (
        <Container>
                   <Grid container spacing={2}>
                        <Grid item xs={12} md={6} sx={{mt:8,textAlign:'center'}}>
                               <Typography sx={{textAlign:'center'}} variant="body1" gutterBottom>
                                          Login
                              </Typography>
                              <form onSubmit={handleLogin}>
                                <TextField
                                        sx={{width:'75%',m:1}}
                                        id="standard-basic"
                                        label="Your Email"
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
                                        onChange={handleOnChange}
                                        autoComplete="current-password"
                                        variant="standard"
                                    />
                                    { error && <Alert severity="error">{ error }</Alert> }
                                   {user?.email && <Alert severity="success">Login successfully</Alert>}
                               <Button type="submit" sx={ { width: '75%', m: 1 } } variant="contained">Login</Button>
                                   <NavLink
                                 style={ { textDecoration: 'none'} }
                                       to="/register"
                                        >
                                            <Button  variant="text">Are You new user? Please Register</Button>
                                 </NavLink>
                         </form>
                               <p>or</p>
                           <Button onClick={handleGoogleLogin} sx={ { width: '50%', m: 1 } } variant="contained">google Sign In</Button>
                          { isLoading && <CircularProgress /> }
                        </Grid>
                        <Grid item xs={12} md={6}>
                                <img style={{width:'100%', height: '75%'}} src={login} alt="" />
                        </Grid>
  
               </Grid>
        </Container>
    );
};

export default Login;