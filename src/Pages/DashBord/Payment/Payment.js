import { Typography } from '@mui/material';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckOutForm from './CheckOutForm';


const StripePromise = loadStripe('pk_test_51Jvl5BBcfVbpalL0mYOzEX4zVqBzH61iXw3AF0DJklwKueeJQLh2dLrtIeBy9XqOQzMfnfx0chTf7F4rzx1sROlL00TddABdIC')

const Payment = () => {
    const {appointmentId}=useParams();
    const [ appointment, setAppointment ] = useState({})
    
    useEffect(() => {
        fetch(`https://infinite-sea-38686.herokuapp.com/appointments/${appointmentId}`)
            .then(res => res.json())
        .then(data => setAppointment(data))

    },[appointmentId])
    return (
        <div>
                   
            <Typography variant="h3">payment : {appointmentId}</Typography>
            <Typography variant="h3">Pay : $ { appointment.price }</Typography>
            
           {appointment?.price && <Elements stripe={StripePromise}>
                <CheckOutForm
                appointment={appointment}
                />
          </Elements>}
        </div>
    );
};

export default Payment;