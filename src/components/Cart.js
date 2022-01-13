import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useCartContext } from "../context/CartContext";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  containerCart: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    margin: "20px",
  },
  infoContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "20px",
  },
});

const Cart = () => {
  const classes = useStyles();

  const { items, emptyItems, removeItem, count } = useCartContext();
  console.log(count)
 
  return (
    <Box className={classes.containerCart}>
      {items.map((item) => (
        <Box className={classes.infoContainer} key={item.id}>
          <img src={item.imagen} alt={item.nombre} className="img-cart" />
          <Typography variant="h6" sx={{ margin: "0 20px" }}>
            {item.nombre}
          </Typography>
          <Typography variant="h6">${item.precio}</Typography>
          <Typography variant="h6">${count}</Typography>
          
          <Button onClick={() => removeItem(item.id)}> X </Button>
        </Box>
      ))}
      <Button onClick={emptyItems}>Vaciar carrito</Button>
    </Box>
  );
};

export default Cart;
