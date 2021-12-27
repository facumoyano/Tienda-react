import React from 'react'
import { ThemeProvider } from "@mui/material";
import theme from '../temaConfig';
import NavBar from './NavBar';
import ItemListContainer from './ItemListContainer';



const Home = () => {
    return (
        <>
        <ThemeProvider theme={ theme }>
            <NavBar />
            <ItemListContainer titulo="ORIGIN Clothes" subtitulo="La tienda de ropa mas grande de Argentina"/>
        </ThemeProvider>
        </>
        
    )
}

export default Home