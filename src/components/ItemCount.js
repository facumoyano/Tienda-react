import { Box, CardContent, Button, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const ItemCount = ({ stock, onAdd }) => {
  const { contador } = useCartContext();
  const [count, setCount] = useState(1);

  function sumar() {
    if (count < stock) {
      setCount(count + 1);
    }
  }

  function restar() {
    if (count > 1) {
      setCount(count - 1);
    }
  }
  console.log(stock)
  return (
    <>
          {stock ?
          <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          fontSize: 30,
        }}
      >
        <CardContent>
          <Button
            sx={{
              fontSize: 30,
            }}
            onClick={restar}
          >
            -
          </Button>
          <Typography variant="p">{count}</Typography>
          <Button
            sx={{
              fontSize: 30,
            }}
            onClick={sumar}
          >
            +
          </Button>
        </CardContent>
      </Box>
      
      
      <Button
        variant="contained"
        sx={{
          margin: 1,
        }}
        onClick={() => {
          onAdd();
          contador(count);
        }}
      >
        Añadir al carrito
      </Button>
      </>
      
      :
      <Link to="/" className="link">
      <Button
      variant="contained"
      sx={{
        margin: 1,
        width: '100%'
      }}
    >
      Regresar
    </Button>
    </Link>
      }
    </>
  );
};

export default ItemCount;
