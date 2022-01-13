import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "space-evenly",
    my: 5,
  },
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    padding: 10,
    textAlign: "center",
  },
  button: {
    width: "100%",
    fontSize: "50px",
  },
});

const ItemDetail = ({ item }) => {
  const classes = useStyles();

  const { añadirAlCarrito } = useCartContext();
  const [add, setAdd] = useState(false);

  const onAdd = () => {
    setAdd(true);
  };
  const back = () => {
    setAdd(false);
  };

  return (
    <div>
      <Box className={classes.container}>
        <Box>
          <img src={item.imagen} alt="asd" />
        </Box>
        <Box className={classes.infoContainer}>
          <Typography
            variant="h4"
            sx={{
              py: 1,
            }}
          >
            {item.nombre}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              py: 1,
            }}
          >
            ${item.precio}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              py: 0.3,
            }}
          >
            Stock: {item.stock}
          </Typography>
          {!add && <ItemCount stock={item.stock} onAdd={onAdd} />}
          {add && (
            <Box>
              <Link to="/cart" className="link" sx={{ margin: "5px" }}>
                <Button
                  className={classes.button}
                  variant="contained"
                  onClick={() => añadirAlCarrito(item)}
                >
                  Finalizar compra
                </Button>
              </Link>
              <Button
                variant="outlined"
                className={classes.button}
                onClick={back}
                sx={{ mt: "10px" }}
              >
                Regresar
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </div>
  );
};

export default ItemDetail;
