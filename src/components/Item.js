import React  from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Item = ( {item} ) => {

    return ( 
        <>
            <Card sx={{ maxWidth: 345 }} >
                <CardMedia
                  component="img"
                  height="240"
                  image={item.imagen}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.titulo}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.nombre}
                  </Typography>
                  <Typography variant="body2" color="primary" pt={2}>
                    {item.precio}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Ver detalles</Button>
                </CardActions>
              </Card>
            
        </>
    );
    
}

export default Item
