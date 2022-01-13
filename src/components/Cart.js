import React from "react";
import { useCartContext } from "../context/CartContext";

import DeleteIcon from '@mui/icons-material/Delete';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from "@mui/material";



const Cart = () => {
  

  const { items, count, removeItem, emptyItems } = useCartContext();
 
  return (
    <>
    <TableContainer component={Paper} sx={{margin: '20px'}}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Producto</TableCell>
          <TableCell align="left"></TableCell>
          <TableCell align="left">Precio</TableCell>
          <TableCell align="left">Cantidad</TableCell>
          <TableCell align="left">Eliminar</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {items.map((item) => (
          <TableRow
            key={item.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              <img src={item.imagen} alt={item.nombre} className="img-cart"></img>
            </TableCell>
            <TableCell align="left">{item.nombre}</TableCell>
            <TableCell align="left">${item.precio}</TableCell>
            <TableCell align="left">{count}</TableCell>
            <TableCell align="left"><DeleteIcon  onClick={() => removeItem(item.id)} sx={{cursor: 'pointer'}}/></TableCell>
            
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  <Button variant="contained" onClick={emptyItems}>Vaciar carrito</Button>
  </>
  );
};

export default Cart;
