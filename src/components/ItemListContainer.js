import { Typography } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles'
import { grey, red } from '@mui/material/colors'
import { Box } from '@mui/system'
import ItemList from './ItemList'


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

const ItemListContainer = ({ titulo, subtitulo }) => {
    const classes = useStyle()
    return (
        <Box mt={4}>
            <Typography variant="h1" className={classes.titulo}>
                {titulo}
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitulo} sx={{fontWeight: 'bold'}} >
                {subtitulo}
            </Typography>
            <ItemList />
            
        </Box>
    )
}

export default ItemListContainer
