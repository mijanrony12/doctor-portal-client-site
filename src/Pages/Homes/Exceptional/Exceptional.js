import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import './Exceptional.css'
import treatment from '../../../images/treatment.png'
const Exceptional = () => {
    return (
        <Container sx={{my:8}}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6}>
                    <img className="image-handle" src={treatment} alt="treatment pic" />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} sx={{ display: 'flex',alignItems: 'center' }}>
                           <Grid>
                        <Typography variant="h4" sx={ { mb:3, fontWeight:'bold'}}>
                                        Exceptional Dental <br /> Care, On Your Terms
                                   </Typography>
                                    <Typography variant="p" sx={{color:'gray', textAlign:'justify'}}>
                                            If you’re unhappy with the way your teeth look, cosmetic dentistry is a great option to achieve the picture-perfect smile you desire. Cosmetic procedures are a big investment, so you don’t want to trust the process to just anyone. Although there are many exceptional dental practices in the area, it’s best to choose a cosmetic dentist in Gainesville. While many general dentists offer elective services, there are several advantages to choosing a cosmetic dentist. Here is why it’s best to entrust your smile to a dental professional who specializes in aesthetic treatments.
                                   </Typography>

                                    <Typography sx={{mt:3}}>
                                            <Button variant="contained">Learn More</Button>
                                    </Typography>
                    
                           </Grid>
                    </Grid>
            </Grid>
    </Container>
    );
};

export default Exceptional;