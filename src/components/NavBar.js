import React from 'react'
import { AppBar, Toolbar } from '@mui/material';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
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
                    <Link to="/" variant="h5" className='link'>
                        TIENDA ORIGIN
                    </Link>
                        <CartWidget/>
                </Toolbar>
            </AppBar>
            <div className={classes.offset}></div>
        </>    
        
    )
}

export default NavBar
