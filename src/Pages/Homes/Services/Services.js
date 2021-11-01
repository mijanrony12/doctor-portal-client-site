import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png'
import whitening from '../../../images/whitening.png'
import Cavity from '../../../images/cavity.png'

const services = [
    {
        name: 'fluoride Treatment',
        details:'A noteworthy part of dental examination is the fluoride treatment, the dental examination is a deliberate procedure amid which your dentist will explore numerous features of your oral and systemic health to distinguish pathologies or concerns and build up',
        img:fluoride
    },
    {
        name: 'Cavity Filling',
        details:'Hillside Dentistry provides full service care for the whole family including check ups, cleanings, teeth whitenings, fillings, laminate veneers and crowns, gum treatment, oral surgery and full mouth reconstructions. In addition to family dentistry, Hillside Dentistry',
       img:whitening
    },
    {
        name: 'Teath whitening',
        details:'Multiple factors cause teeth to become dull and lose their bright, white sparkle.Certain foods can stain your enamel, which is the outermost layer of your teeth. Additionally, plaque buildup on your teeth can cause them to look yellow.This type of discoloration',
        img:whitening
    }
]
const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                
                <Typography variant="h6"style={{textAlign:'center'}} component="div" sx={{ fontWeight: 'medium',color: 'success.main',mt:8 }}>
                               Our Services
                </Typography>
                <Typography variant="h3"style={{textAlign:'center'}} component="div" sx={{ fontWeight: 'bold',fontFamily: 'Monospace',mb:4 }}>
                               Services we Provide
                </Typography>
                <Grid container spacing={ { xs: 2, md: 3 } } columns={ { xs: 4, sm: 8, md: 12 } }>
                      
                        {
                        services.map(service => <Service
                            key={ service.name }
                            service={service}
                        ></Service>)
                        }
                    </Grid>
             </Container>
    </Box>
    );
};

export default Services;