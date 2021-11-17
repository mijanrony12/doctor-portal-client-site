import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';
import React, {useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
const CheckOutForm = ({ appointment }) => {
    const { price, patientName,_id } = appointment;
    

    const stripe = useStripe();
    const elements = useElements();
    const [ error, setError ] = useState('')
    const [ success, setSuccess ] = useState('')
    const [ clientSecret, setClientSecret ] = useState('')
    
    useEffect(() => {
        fetch('https://infinite-sea-38686.herokuapp.com/create-payment-intent',{
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body:JSON.stringify({price})
        })
            .then(res => res.json())
            .then(data => {
            setClientSecret(data.clientSecret);
        })

    },[price])


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements)
        {
            return;
        }
     
        const card = elements.getElement(CardElement)
        if (card == null)
        {
            return;
        }
   
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error)
        {
            setSuccess('')
            setError(error.message)
        }
        else
        {
            console.log(paymentMethod);
            setError('')
        }
 
        //
                const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
                    clientSecret,
                    {
                        payment_method: {
                        card: card,
                        billing_details: {
                            name: patientName,
                           
                        },
                        },
                    },
                    );
        if (intentError)
        {
            setError(intentError.message)
             setSuccess('')
        }
        else
        {
            setError('')
            setSuccess('Your payment proccessed successfully');
            console.log(paymentIntent);
            //send to database
            const payment = {
                amount: paymentIntent.amount,
                created: paymentIntent.created,
                last4:paymentMethod.card.last4,
                transation: paymentIntent.client_secret.slice('_secret')[0]
            }
            const url = `https://infinite-sea-38686.herokuapp.com/allAppointment/${_id}`
            fetch(url, {
                method: "PUT",
                headers: { 'content-type': 'application/json' },
                body:JSON.stringify(payment)
            })
                .then(res => res.json())
            .then(data => {console.log(data)})
              
       }

    };
    return (
        <div>
                   <form onSubmit={handleSubmit}>
                                <CardElement
                                    options={{
                                    style: {
                                        base: {
                                        fontSize: '16px',
                                        color: '#424770',
                                        '::placeholder': {
                                            color: '#aab7c4',
                                        },
                                        },
                                        invalid: {
                                        color: '#9e2146',
                                        },
                                    },
                                    }}
                                />
                                <button type="submit" disabled={!stripe}>
                                        Pay $ {price}
                                </button>
            </form>
            {
                error && <p style={{color:'red'}}>{error}</p>
            }
            {
                success && <p style={{color:'green'}}>{success}</p>
            }
        </div>
    );
};

export default CheckOutForm;