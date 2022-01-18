import React from "react";
import { ThemeProvider } from "@mui/material";
import theme from "./temaConfig";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Cart from "./components/Cart";
import { CartProvider } from "./context/CartContext";



function App() {
  return (
    <BrowserRouter>
      <CartProvider>
      <ThemeProvider theme={ theme }>
        <NavBar />
      <Routes>
        <Route index path="/" element={<ItemListContainer titulo="ORIGIN Clothes"/>} >
          
        </Route>
        <Route path="/Item/:id" element={<ItemDetailContainer />}>
          
        </Route>
        <Route path="/category/:catId" element={<ItemListContainer />}>
          
        </Route>
        <Route path="/cart" element={<Cart />}>
          
        </Route>
      </Routes>
      </ThemeProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
