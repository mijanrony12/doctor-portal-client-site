import { Container, Grid, Typography } from '@mui/material';
import { textAlign } from '@mui/system';
import React from 'react';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id:1,
        name: 'teeth orthodonitcs',
        date: '8.00 AM - 9.00 AM',
        space: 10
    },
    {
         id:2,
        name: 'Cosmetics dentistry',
        date: '10.00 AM - 11.30 AM',
        space: 10
    },
    {
         id:3,
        name: 'teeth cleaning',
        date: '5.00 AM - 6.30 AM',
        space: 10
    },
    {
         id:4,
        name: 'cavity protection',
        date: '7.00 AM - 8.30 AM',
        space: 10
    },
    {
         id:5,
        name: 'teeth orthodonitcs',
        date: '8.00 AM - 9.00 AM',
        space: 10
    },
    {
         id:6,
        name: 'teeth orthodonitcs',
        date: '8.00 AM - 9.00 AM',
        space: 10
    },
]

const AvailableAppointment = ({date}) => {
    return (
        <Container>
            <Typography variant="h4" sx={{color: 'info.main', textAlign: 'center', fontWeight:'bold', margin:'40px 0px'}}>
                      AvailableAppointment:{ date.toDateString() }
                </Typography>
            <Grid container spacing={2} sx={{textAlign:'center'}}>
               
                {
                    bookings.map(booking => <Booking
                        booking={ booking }
                    >

                    </Booking>)
              }
            </Grid>
        </Container>
    );
};

export default AvailableAppointment;