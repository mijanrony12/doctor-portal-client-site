import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Typography } from '@mui/material';
import { height } from '@mui/system';
import { Height } from '@mui/icons-material';

const bannerBg = {
    backgroud: `url(${bg})`,
    
}
const Banner = () => {
    return (
       <Box sx={{ flexGrow: 1 }} style={bannerBg}>
            <Grid container spacing={ 2 } sx={ { p:3, height:500,border:'2px solid black'}}>
                <Grid item xs={12} md={5}>
                            <Typography variant="h3" sx={{fontWeight:'bold', fontStyle:'italic', }}>
                                    Your new smile <br /> starts here
                        </Typography>
                            <Typography variant="h6" sx={{color:'gray',my:3}}>
                                    During 2020-21, many improvements are planned to improve the quality of general practice
                                    appointment data (GPAD). To ensure all appointments are being recorded in general practice
                                    appointment books
                            </Typography>
                            <Button variant="contained">Get Appointment</Button>
                </Grid>
                <Grid item xs={12} md={7} sx={{textAlign:'center'}}>
                    <img style={{width: 550}} src={chair} alt="chair" />
                </Grid>
      </Grid>
    </Box>
    );
};

export default Banner;