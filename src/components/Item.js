import React  from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


const Item = ( {item} ) => {

    return ( 
        <>
        
            <Card sx={{ maxWidth: 300,
                        width: 300
             }} >
                <CardMedia
                  component="img"
                  height="240"
                  image={item.imagen}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" sx={{
                    fontWeight: 700
                  }}>
                    {item.titulo}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.nombre}
                  </Typography>
                  <Typography variant="body1" color="primary" pt={2}>       
                    ${item.precio}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link to={`/Item/${item.id}`} className='link'>
                    <Button size="small" variant='contained'>Ver detalles</Button>
                  </Link>
                </CardActions>
              </Card>
            
        </>
    );
    
}

export default Item
