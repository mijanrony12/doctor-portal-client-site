import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
const AllAppointment = ({date}) => {
    const { user } = useAuth()
    
    const [ allAppointment, setAllAppointment ] = useState([])
    
    useEffect(() => {
            const url = `https://infinite-sea-38686.herokuapp.com/allAppointment?email=${user.email}&date=${date.toLocaleDateString()}`
            fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAllAppointment(data);
        })
    },[date])
    return (
        <div>
            <h2>Your appointments { allAppointment.length }</h2>
             <TableContainer component={Paper}>
      <Table sx={{ }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Time</TableCell>
            <TableCell align="right">Service</TableCell>
            <TableCell align="right">Action</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {allAppointment.map((appointment) => (
            <TableRow
              key={appointment._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {appointment.patientName}
              </TableCell>
              <TableCell align="right">{appointment.date}</TableCell>
              <TableCell align="right">{appointment.serviceName}</TableCell>
              <TableCell align="right">{ appointment.payment ?
                'paid' :
                <Link to={`/dashbord/payment/${appointment._id}`}> <button>pay</button> </Link>
              }</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default AllAppointment;