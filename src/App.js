import React from "react";
import { ThemeProvider } from "@mui/material";
import theme from "./temaConfig";
import NavBar from "./components/NavBar";


function App() {
  return (
    <ThemeProvider theme={ theme }>
      <NavBar />
    </ThemeProvider>
  );
}

export default App;
