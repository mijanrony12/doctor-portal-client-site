import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import { Button, Container, Typography } from '@mui/material';


const styleAppointment = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(40, 53, 67,0.7)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop:'150px'
}

const AppointmentBanner = () => {
    return (
        <Container>
            <Box style={ styleAppointment } sx={ { flexGrow: 1}}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={5}>
                        <img style={{width:400,marginTop: -110}} src={doctor} alt="" />
                    </Grid>
                    <Grid item xs={12} md={7} style={{marginTop:'25px'}}>
                            <Typography variant="h6" sx={{color: 'info.main'}}>
                                    Appointment
                            </Typography>
                        <Typography variant="h4"  sx={{mt:2}} style={ { color: 'white', fontWeight:'bold',fontStyle:'italic'}}>
                                   Make an appoinment Today
                            </Typography>
                            <Typography variant="h6" style={{color: 'white',fontWeight:'300'}}>
                                   United Nations Secretary-General António Guterres today announced the appointment of Patrick Gauchat of Switzerland as Head of Mission and Chief of Staff of the United Nations Truce Supervision Organization (UNTSO). 
                        </Typography>
                        <Button sx={{mt:2}} variant="contained">Learn More</Button>
                    </Grid>
                
                </Grid>
          </Box>
  </Container>
    );
};

export default AppointmentBanner;