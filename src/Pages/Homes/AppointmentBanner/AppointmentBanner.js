import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import { Container, Typography } from '@mui/material';


const styleAppointment = {
    background:`url(${bg})`
}

const AppointmentBanner = () => {
    return (
        <Container>
               <Box style={styleAppointment} sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img style={{width:400}} src={doctor} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                            <Typography variant="h6">
                                    Appointment
                            </Typography>
                    </Grid>
                
                </Grid>
          </Box>
  </Container>
    );
};

export default AppointmentBanner;