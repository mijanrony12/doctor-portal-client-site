import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({bookingOpen,handleBookingClose,booking,time}) => {
    const { name,date } = booking;
    const handleBookingSend = e => {
        e.preventDefault()
        handleBookingClose()
        alert('send Complete')
        //collect data
        //send to the server
   }
    return (
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={bookingOpen}
        onClose={handleBookingClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={bookingOpen}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
             {name}
            </Typography>
           
              <form  onClick={handleBookingSend}>
                    
                        <TextField
                            disabled
                            sx={{width:'90%', m:1, p:1}}
                                id="outlined-size-small"
                                defaultValue={date}
                                size="small"
                         />
                        <TextField
                           
                            sx={{width:'90%', m:1, p:1}}
                                id="outlined-size-small"
                                defaultValue="Your Name"
                                size="small"
                         />
                        <TextField
                           
                            sx={{width:'90%', m:1, p:1}}
                                id="outlined-size-small"
                                defaultValue="Your Email"
                                size="small"
                         />
                        <TextField
                           
                            sx={{width:'90%', m:1, p:1}}
                                id="outlined-size-small"
                                defaultValue="Your Phone"
                                size="small"
                         />
                        <TextField
                            disabled
                            sx={{width:'90%', m:1, p:1}}
                                id="outlined-size-small"
                                defaultValue={time}
                                size="small"
                        />
                        <Button sx={{marginLeft:'14px'}} type="submit" variant="outlined">Send</Button>
           </form>
           
          </Box>
        </Fade>
      </Modal>
    );
};

export default BookingModal;
