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


function Detalist() {
    const { fav } = useContext(Context);
    console.log(fav);
    return (
        <div>salam</div>
        /*  <TableContainer component={Paper}>
             <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                 <TableHead>
                     <TableRow>
                         <TableCell>Country</TableCell>
                         <TableCell align="right">City</TableCell>
                         <TableCell align="right">Region</TableCell>
                         <TableCell align="right">Company Name</TableCell>
                         <TableCell align="right">Contact Title</TableCell>
                         <TableCell align="right">Street</TableCell>
                     </TableRow>
                 </TableHead>
                 <TableBody>
                     {fav.map((row) => (
                         <TableRow
                             key={row.id}
                             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                         >
                             <TableCell component="th" scope="row">
                                 {row.name}
                             </TableCell>
                             <TableCell align="right">{row.address?.country}</TableCell>
                             <TableCell align="right">{row.address?.city}</TableCell>
                             <TableCell align="right">{row.address?.region}</TableCell>
                             <TableCell align="right">{row.address?.street}</TableCell>
                         </TableRow>
                     ))}
                 </TableBody>
             </Table>
         </TableContainer> */


    )
}

export default Detalist