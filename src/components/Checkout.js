import React from "react";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { useCartContext } from "../context/CartContext";
import { makeStyles } from "@mui/styles";
import db from "../firebase/firebase";
import { Button, FormControl, InputLabel, Input, Alert } from "@mui/material";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { red } from "@mui/material/colors";

const useStyles = makeStyles({
  
    formContainer: {
      display: "flex",
      flexDirection: "column",
      width: "50%",
      margin: "0 auto",
    },
    span: {
      fontWeight: 700,
      color: red[400],
      textDecoration: 'underline'
    },
    buttonCenter: {
      width: '100%'
    },
    "@media (max-width: 768px)": {
      formContainer: {
        width: '90%'
      }
    }
  
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const Checkout = () => {
  const classes = useStyles();
  const { items, getTotal, emptyItems } = useCartContext();
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false);
  const [idCompra, setIdCompra] = useState("");
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [buyer, setBuyer] = useState({
    nombre: "",
    email: "",
    telefono: "",
  });

  const date = new Date();
  const orderDate = date.toLocaleDateString();

  const newOrder = {
    buyer,
    product: items,
    price: getTotal(),
    date: orderDate,
  };

  const handleSubmit = async (e) => {
    try {
      if (buyer.nombre && buyer.email && buyer.telefono) {
        e.preventDefault();

        items.forEach((item) => {
          const itemRef = doc(db, "products", item.id);
          updateDoc(itemRef, { stock: item.stock - item.cantidad });
          const orders = collection(db, "orders");
          addDoc(orders, newOrder).then(({ id }) => {
            setIdCompra(id);
          });
          handleOpen();
        });
      } else {
        setError(true);

        return;
      }
      setError(false);
      
    } catch (err) {
      console.error(err);
    }
  };
  const handleSubmitChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };
  return (
    <Box className={classes.formContainer}>
      <FormControl
        onSubmit={handleSubmit}
        sx={{
          margin: "30px 0",
        }}
      >
        <InputLabel htmlFor="nombre">Nombre:</InputLabel>
        <Input
          name="nombre"
          id="nombre"
          type="text"
          aria-describedby="nombre-helper"
          onChange={handleSubmitChange}
        />
      </FormControl>

      <FormControl
        sx={{
          margin: "30px 0",
        }}
      >
        <InputLabel htmlFor="email">Email:</InputLabel>
        <Input
          name="email"
          type="email"
          aria-describedby="email-helper"
          onChange={handleSubmitChange}
        />
      </FormControl>

      <FormControl
        sx={{
          margin: "30px 0",
        }}
      >
        <InputLabel htmlFor="telefono">Telefono:</InputLabel>
        <Input
          name="telefono"
          type="number"
          aria-describedby="telefono-helper"
          onChange={handleSubmitChange}
        />
      </FormControl>
      {buyer.nombre && buyer.email && buyer.telefono ? 
      <Button
        variant="contained"
        onClick={(e) => {
          handleSubmit(e);
          
        }}
        sx={{
          margin: "20px",
        }}
        
      >
        Finalizar compra
      </Button> :
       <Button
       variant="contained"
       onClick={(e) => {
         handleSubmit(e);
         
       }}
       sx={{
         margin: "20px",
       }}
       disabled
     >
       Finalizar compra
     </Button>
      }
      {error && (
        <Alert severity="error">Todos los campos son obligatorios</Alert>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={style}>
          <h2 id="parent-modal-title">Gracias por tu compra {buyer.nombre} </h2>
          <p id="parent-modal-description" className="modalText">
            En los próximos minutos recibirás un mail a <span className={classes.span}>{buyer.email}</span> con la
            orden de compra <span className={classes.span}>{idCompra}</span>
          </p>
          <p>Que lo disfrutes!</p>
          <div className={classes.buttonCenter}>
          <Link to="/" className="link">
              <Button variant="contained" onClick={emptyItems} sx={{width: '100%'}}>
                  Volver a inicio
              </Button>
          </Link>
          </div>
        </Box>
      </Modal>
    </Box>
  );
};

export default Checkout;
