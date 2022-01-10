import React, { useState } from 'react'
import { Box, Button, Typography } from '@mui/material'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'

const ItemDetail = ({item}) => {
    const { addToCart } = useCartContext()
    const [add, setAdd] = useState(false)

    const onAdd = () => {
        setAdd(true)
    }
    const back = () => {
        setAdd(false)
    }
    


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
                {
                    !add && 
                    <ItemCount stock={item.stock} onAdd={onAdd}/>
                }
                {
                    add &&
                    <Box sx={{
                            display: 'flex',
                            flexDirection: 'column'
                    }}>
                    <Link to="/cart" className='link'>
                        <Button variant='contained' sx={{
                                margin: 1,
                                width: '100%'
                        }} onClick={() => addToCart(item)}>
                        Finalizar compra
                        </Button>
                    </Link>
                    <Button variant='outlined' sx={{
                            margin: 1,
                            width: '100%'
                    }} onClick={back}>
                    Regresar
                    </Button>
                    </Box> 
                }
            </Box>
            
            
        </Box>
        </div>
    )
}

export default ItemDetail
