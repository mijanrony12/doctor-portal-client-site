import React,{useState,useEffect} from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Doctor from '../Doctor/Doctor';
const Doctors = () => {
    const [ doctors, setDoctors ] = useState([])

    
    useEffect(() => {
        fetch('https://infinite-sea-38686.herokuapp.com/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data))
        
    },[])
    return (
        <div>
            <h2>all Doctors: { doctors.length }</h2>
                    <Container>
                            <Grid container spacing={2}>
                                     {
                        doctors.map(doctor => <Doctor
                            key={ doctor._id }
                            doctor={doctor}
                        />)
                                     }
                            </Grid>
                    </Container>
        </div>
    );
};

export default Doctors;