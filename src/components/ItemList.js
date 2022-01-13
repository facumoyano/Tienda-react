import React from "react";
import { useEffect, useState } from "react";
import Item from "./Item";
import { Box } from "@mui/system";
import { CircularProgress } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "30px",
    justifyItems: "center",
  },
});

const ItemList = () => {
  const classes = useStyles();

  const [productos, setProductos] = useState([]);
  const [spinner, setSpinner] = useState(false);

  const getItems = () => {
    const URL = "../../productos.json";
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setProductos(data);
          setSpinner(true);
        }, 2000);
      });
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div>
      {spinner ? (
        <Box className={classes.container}>
          {productos.map((p) => (
            <Item item={p} key={p.id}></Item>
          ))}
        </Box>
      ) : (
        <div className="spinner1">
          <CircularProgress />
        </div>
      )}
    </div>
  );
};

export default ItemList;
