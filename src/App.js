import React from "react";
import { ThemeProvider } from "@mui/material";
import theme from "./temaConfig";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ItemDetailContainer from "./components/ItemDetailContainer";



function App() {
  return (
    <BrowserRouter>
    <ThemeProvider theme={ theme }>
      <NavBar />
    <Routes>
      <Route index path="/" element={<Home />} >
        
      </Route>
      <Route path="/ItemDetail/:id" element={<ItemDetailContainer />}>
        
      </Route>
    </Routes>
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
