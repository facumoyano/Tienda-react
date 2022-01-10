import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useCartContext } from '../context/CartContext'

const Cart = () => {
    const { items, emptyItems, removeItem } = useCartContext()
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            {items.map( item => 
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    margin: '20px'

                }} key={item.id}>
                    <img src={item.imagen} alt={item.nombre} className='img-cart'/>
                    <Typography variant='h6' sx={{
                                                margin: '0 20px'
                                            }}>
                         {item.nombre} 
                    </Typography>
                    <Typography variant='h6'> 
                        ${item.precio} 
                    </Typography>
                    <Button onClick={() => removeItem(item.id)}> X </Button>
                </Box>)}
                <Button onClick={emptyItems}>Vaciar carrito</Button>
        </Box>
    )
}

export default Cart
