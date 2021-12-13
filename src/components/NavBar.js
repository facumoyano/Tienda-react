import React from 'react'
import { AppBar, Toolbar } from '@mui/material';
import CartWidget from './CartWidget';
import { Link } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar
}))

const NavBar = () => {
    const classes = useStyles();
    return (
        <>
            <AppBar>
                <Toolbar sx={{ justifyContent: 'space-between'}}>
                    <Link href="#" color="inherit" variant="h5" underline="none">
                        Tienda ORIGIN
                    </Link>
                        <CartWidget/>
                </Toolbar>
            </AppBar>
            <div className={classes.offset}></div>
        </>    
        
    )
}

export default NavBar
