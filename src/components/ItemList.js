import React from "react";
import { useEffect, useState } from "react";
import Item from "./Item";
import { Box } from "@mui/system";
import { CircularProgress } from "@mui/material";
import { makeStyles } from "@mui/styles";
import db from "../firebase/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";

const useStyles = makeStyles({
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "30px",
    justifyItems: "center",
  },
  "@media (max-width: 768px)": {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
});

const ItemList = () => {
  const classes = useStyles();
  const { catId } = useParams();

  const [productos, setProductos] = useState([]);
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    const getItems = async () => {
      setSpinner(true);

      const myItems = catId
        ? query(collection(db, "products"), where("categoria", "==", catId))
        : collection(db, "products");
      const querySnapshot = await getDocs(myItems);

      setProductos(
        querySnapshot.docs.map((el) => {
          return { ...el.data(), id: el.id };
        })
      );
      setSpinner(false);
    };
    getItems();
  }, [catId]);

  return (
    <div>
      {spinner ? (
        <div className="spinner1">
          <CircularProgress />
        </div>
      ) : (
        <Box className={classes.container}>
          {productos.map((p) => (
            <Item item={p} key={p.id}></Item>
          ))}
        </Box>
      )}
    </div>
  );
};

export default ItemList;
