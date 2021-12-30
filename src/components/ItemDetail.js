import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import ItemCount from './ItemCount'

const ItemDetail = ({item}) => {
    return (
        <div>
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
                <ItemCount stock={item.stock} />
            </Box>
            
            
        </Box>
        </div>
    )
}

export default ItemDetail
