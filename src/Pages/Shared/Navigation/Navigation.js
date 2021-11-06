import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Navigation = () => {
  const {user, logOut}=useAuth()
    return (
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
            </Typography>
            <Link to="/appointment" style={ { textDecoration: 'none', color:'white'}}>Appointment</Link>
           
            {
              user?.email ?   
                <>
                     <Link to="/dashbord" style={ { textDecoration: 'none', color:'white',padding:'10px'}}>DashBoard</Link>
                    <Button  style={ { textDecoration: 'none', color:'white' }} onClick={logOut} color="inherit">Logout</Button>
                </>
         
              :
                <NavLink to="/login">
                  <Button style={ { textDecoration: 'none', color:'white'}} color="inherit">Login</Button>
                </NavLink>
            }
            <p>{user.displayName}</p>
        </Toolbar>
      </AppBar>
    </Box>
    );
};

export default Navigation;