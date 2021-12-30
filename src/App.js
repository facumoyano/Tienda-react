import React from "react";
import { ThemeProvider } from "@mui/material";
import theme from "./temaConfig";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Categories from "./components/Categories";
import ItemListContainer from "./components/ItemListContainer";



function App() {
  return (
    <BrowserRouter>
    <ThemeProvider theme={ theme }>
      <NavBar />
    <Routes>
      <Route index path="/" element={<ItemListContainer titulo="ORIGIN Clothes"/>} >
        
      </Route>
      <Route path="/Item/:id" element={<ItemDetailContainer />}>
        
      </Route>
      <Route path="/category/:catId" element={<Categories />}>
        
      </Route>
    </Routes>
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
