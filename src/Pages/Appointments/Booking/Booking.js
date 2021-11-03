import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const Booking = ({ booking }) => {
    const { name, date, space } = booking;
    return (
       <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={ 3 } sx={ { py:4, px:2}}>
                       <Typography sx={{ color: 'info.main', fontWeight:'bold' }} variant="h4" gutterBottom component="div">
                           {name}
                      </Typography>
                       <Typography sx={{fontWeight: 600}} variant="h6" gutterBottom component="div">
                           {date}
                     </Typography>
                     <Typography variant="caption" display="block" gutterBottom>
                          {space} Spaces Available.
                  </Typography>
                    <Button sx={{marginTop:2}} variant="contained">Book Appointment</Button>
               </Paper>
        </Grid>
    );
};

export default Booking;