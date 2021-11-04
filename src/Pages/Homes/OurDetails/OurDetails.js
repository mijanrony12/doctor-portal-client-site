import { Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import AddLocationIcon from '@mui/icons-material/AddLocation';
 import AccessTimeIcon from '@mui/icons-material/AccessTime';
const OurDetails = () => {
    return (
        <Container>
                   <Grid container spacing={2} sx={{mt:'-75px'}}>
                            <Grid item xs={12} sm={6} md={4}>
                                     <Paper elevation={ 3 } sx={{display:'flex', justifyContent:'center', alignItems:'center', p:3, background:'#00cec9',color:'#ffffff'}}>
                                                <Typography sx={{mr:3, fontSize:'48px'}}>
                                                    <AccessTimeIcon></AccessTimeIcon>
                                                </Typography>
                                              <Typography sx={{ml:3}}>
                                                      Opening Hours <br />
                                                     Lorem ipsum dolor sit  <br /> adipisicing elit. Aspernatur
                                             </Typography>
                                      </Paper>
                           </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                       <Paper elevation={ 3 } sx={{display:'flex', justifyContent:'center', alignItems:'center', p:3, background:'#2c3e50',color:'#ffffff'}}>
                                                <Typography sx={{mr:3, fontSize:'48px'}}>
                                                    <AddLocationIcon></AddLocationIcon>
                                                </Typography>
                                              <Typography sx={{ml:3}}>
                                                      Visit Our Location <br />
                                                      Brooklyn, NewYork,USA
                                             </Typography>
                                      </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                      <Paper elevation={ 3 } sx={{display:'flex', justifyContent:'center', alignItems:'center', p:3, background:'#00cec9',color:'#ffffff'}}>
                                                <Typography sx={{mr:3, fontSize:'48px'}}>
                                                    <AddIcCallIcon></AddIcCallIcon>
                                                </Typography>
                                              <Typography sx={{ml:3}}>
                                                      Contact Us Now <br />
                                                     +8801746207635
                                             </Typography>
                                      </Paper>
                            </Grid>
                          
                    </Grid>
        </Container>
    );
};

export default OurDetails;