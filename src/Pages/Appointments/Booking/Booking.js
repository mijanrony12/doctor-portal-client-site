import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({booking ,time}) => {
    const { name, date, space } = booking;
       const [bookingOpen, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);
    return (
        <>
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
                    <Button onClick={handleBookingOpen} sx={{marginTop:2}} variant="contained">Book Appointment</Button>
               </Paper>
        </Grid>
            <BookingModal
                time={time}
                date={date}
                booking={booking}
                bookingOpen={ bookingOpen }
                handleBookingClose={handleBookingClose}
            ></BookingModal>
       </>
    );
};

export default Booking;