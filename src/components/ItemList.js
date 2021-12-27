import React from 'react'
import { useEffect, useState } from 'react'
import Item from './Item'
import { Box } from '@mui/system'
import { CircularProgress } from '@mui/material'


const ItemList = () => {

    const [productos, setProductos] = useState([])
    const [spinner, setSpinner] = useState(false)

    const getItems = () => {
        const URL = ('../../productos.json')
        fetch(URL)
            .then( res => res.json() )
            .then( data => {
                setTimeout(() => {
                    
                    setProductos(data)
                    setSpinner(true)
                }, 2000);
            })
    }
    

    useEffect( ()=>{
        getItems()
    }, [])

    return (
        <div className='spinner1'>
        {
            spinner ?
        <Box sx={{ display: 'flex',
                    justifyContent: 'space-evenly' 
                    }}>
            
            {productos.map(p =>
                
               <Item item={p} key={p.id}></Item>
            )}
        </Box>
        :
        <CircularProgress />
        }
        </div>
    )
}

export default ItemList;
