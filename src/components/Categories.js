import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Item from './Item'
import { Box } from '@mui/material'
import { Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { grey, red } from '@mui/material/colors'

const useStyle = makeStyles({
    titulo: {
        color: red[400],
        fontWeight: '700',
        textAlign: 'center', 
    },
    subtitulo: {
        color: grey[900],
        textAlign: 'center',
    }
})

const Categories = () => {
    const classes = useStyle()
    const {catId} = useParams()
    const [producto, setProductos] = useState([])

    
    useEffect(() => {
        const getItems = async () => {
            const data = await fetch(`../../productos.json`);
            const prod = await data.json();
            
            const filter = prod.filter((product) => product.categoria === `${catId}`);
                setProductos(filter)
   
            
        }
            getItems()
    }, [catId])


    return (
        <>
        <Typography variant="h1" className={classes.titulo}>
            ORIGIN Clothes
        </Typography>
         <Box sx={{ display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: "30px",
        justifyItems: "center" 
        }}>
            {producto.map(p => <Item item={p} key={p.id}></Item>)}
            
        </Box>
        </>
    )
}

export default Categories
