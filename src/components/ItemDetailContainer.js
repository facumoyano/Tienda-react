import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import ItemCount from './ItemCount'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const ItemDetailContainer = ( ) => {
    const {id} = useParams();
    
    
    const [item, setItem] = useState({})

    useEffect( ()=>{
        const getItems = async () => {
            const data = await fetch(`../../productos.json`);
            const prod = await data.json();
            const filter = prod.filter((product) => product.id == id); 
            setItem(filter)
        }
        getItems();
    }, [id]);

    const producto = item[0];
    console.log(producto)


    return (
        <Box sx={{
            display: 'flex', 
            justifyContent: 'space-evenly',
            my: 5
        }}>
            <Box>
                <img  src="https://www.digitalsport.com.ar/files/products/615b30c27a68d-562155-500x500.jpg" alt='asd'/>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignContent: 'center',
                p: 10,
                textAlign: 'center'
            }}>
                <Typography variant='h4' sx={{
                    py: 1
                }}>
                    {producto.nombre}
                </Typography>
                <Typography variant='h6' sx={{
                    py: 1
                }}>
                    ${producto.precio}
                </Typography>
                <Typography variant='h6' sx={{
                    py: 0.3
                }}>
                    Stock: {producto.stock}
                </Typography>
                <Button variant='contained' sx={{
                    margin: 1
                }}>
                    Añadir al carrito
                </Button>
                <Button variant='outlined' sx={{
                    margin: 1
                }}>
                    Regresar
                </Button>
                <ItemCount />
            </Box>
            
            
        </Box>
    )
}

export default ItemDetailContainer
