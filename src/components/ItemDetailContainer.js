import { Box, Button, CircularProgress, Typography } from '@mui/material'
import React from 'react'
import ItemCount from './ItemCount'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const ItemDetailContainer = ( ) => {
    const {id} = useParams();
    
    
     const [item, setItem] = useState({})
     const [spinner, setSpinner] = useState(false)

    useEffect( ()=>{
        const getItems = async () => {
            const data = await fetch(`../../productos.json`);
            const prod = await data.json();
            
            const filter = prod.find((product) => product.id == id); 
            setTimeout(() => {
                    
                setItem(filter)
                setSpinner(true)
            }, 3000);
            
        }
        getItems();
    }, [id]);


    return (
        <div  className="spinner">
        {
            spinner ? 
            <Box sx={{
                display: 'flex', 
                justifyContent: 'space-evenly',
                my: 5
            }}>

            <Box>
                <img  src={item.imagen} alt='asd'/>
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
                    {item.nombre}
                </Typography>
                <Typography variant='h6' sx={{
                    py: 1
                }}>
                    ${item.precio}
                </Typography>
                <Typography variant='h6' sx={{
                    py: 0.3
                }}>
                    Stock: {item.stock}
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
        :
        <CircularProgress/>
        }
        </div>
    )
}

export default ItemDetailContainer
