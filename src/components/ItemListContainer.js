
import React from "react";
import { makeStyles } from "@mui/styles";
import { red } from "@mui/material/colors";
import { Box } from "@mui/system";
import ItemList from "./ItemList";

const useStyle = makeStyles({
  titulo: {
    color: red[400],
    fontWeight: "700",
    textAlign: "center",
    fontSize: '50px',
    margin: '50px 0'
  }
});

const ItemListContainer = ({ titulo }) => {
  const classes = useStyle();
  return (
    <Box>
      <h1  className={classes.titulo}>
        {titulo}
      </h1>
      <ItemList />
    </Box>
  );
};

export default ItemListContainer;
