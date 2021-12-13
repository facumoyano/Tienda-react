import React from "react";
import { ThemeProvider } from "@mui/material";
import theme from "./temaConfig";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";


function App() {
  return (
    <ThemeProvider theme={ theme }>
      <NavBar />
      <ItemListContainer titulo="ORIGIN Clothes" subtitulo="La tienda de ropa mas grande de Argentina"/>
    </ThemeProvider>
  );
}

export default App;
