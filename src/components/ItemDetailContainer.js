import { CircularProgress } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import db from "../firebase/firebase";
import { getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [item, setItem] = useState({});
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    const getItems = () => {
      setSpinner(true);
      const ref = doc(db, "products", id);

      getDoc(ref).then((querySnapshot) => {
        setItem({ ...querySnapshot.data(), id: querySnapshot.id });
      });
      setSpinner(false);
    };
    getItems();
  }, [id]);

  return (
    <div className="spinner">
      {!spinner ? <ItemDetail item={item} /> : <CircularProgress />}
    </div>
  );
};

export default ItemDetailContainer;
