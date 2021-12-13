import React from 'react'
import { AppBar, Toolbar, Typography  } from '@mui/material';
import CartWidget from './CartWidget';
import ItemListContainer from './ItemListContainer';


const NavBar = () => {

    return (
        
            <AppBar>
                <Toolbar sx={{ justifyContent: 'space-between'}}>
                    <Typography variant="h5">
                    <ItemListContainer nombre=" Tienda origin"/>
                    </Typography>
                        <CartWidget/>
                </Toolbar>
            </AppBar>
        
    )
}

export default NavBar
