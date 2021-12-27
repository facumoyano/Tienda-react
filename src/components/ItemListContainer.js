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

const ItemListContainer = ({ titulo }) => {
    const classes = useStyle()
    return (
        <Box>
            <Typography variant="h1" className={classes.titulo}>
                {titulo}
            </Typography>
            <ItemList />
            
        </Box>
    )
}

export default ItemListContainer
