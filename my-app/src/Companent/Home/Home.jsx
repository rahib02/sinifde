import React from 'react'
import { useContext } from 'react';
import { Context } from '../../Context/Favoriteproduct';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Home.css';
import { Link } from 'react-router-dom';


function Home() {
  const { datas } = useContext(Context);
  const { fav, setfav } = useContext(Context);
  const detal = (row) => {
    setfav(row)
  }
  return (
    <TableContainer component={Paper} id='TableContainer'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" >
        <TableHead>
          <TableRow >
            <TableCell>Country</TableCell>
            <TableCell align='right'>Company Name</TableCell>
            <TableCell align='right'>Detalis</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {datas.map((row) => (
            <TableRow
              key={row.id}
            >
              <TableCell>{row.address?.country}</TableCell>
              <TableCell align='right'>{row.companyName}</TableCell>
              <TableCell align='right'><button onClick={() => detal(row)} className='btn'><Link to={'detalis'}>Detalis</Link></button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Home