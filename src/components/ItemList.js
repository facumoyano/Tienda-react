import React from 'react'
import { useEffect, useState } from 'react'
import Item from './Item'
import { Box } from '@mui/system'

const ItemList = () => {

    const [productos, setProductos] = useState([])

    const getItems = () => {
        const URL = ('../../productos.json')
        fetch(URL)
            .then( res => res.json() )
            .then( data => {
                setTimeout(() => {
                    
                    setProductos(data)
                }, 3000);
            })
    }

    useEffect( ()=>{
        getItems()
    }, [])

    return (
        <Box sx={{ display: 'flex',
                    justifyContent: 'space-evenly' 
                    }}>
            {productos.map(p =>
               <Item item={p} key={p.id}></Item>
            )}
        </Box>
    )
}

export default ItemList;
