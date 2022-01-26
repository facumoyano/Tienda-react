import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  btnDetailContainer: {
    display: "inline-block",
    width: "100%",
    margin: "15px 0",
  },
  btnDetail: {
    width: "90%",
    padding: "20px 0",
  },
  "@media (max-width: 768px)": {
    btnDetailContainer: {
      width: "90%",
    },
  },
});

const Item = ({ item }) => {
  const classes = useStyle();

  return (
    <>
      <Card
        sx={{
          maxWidth: 300,
          width: 300,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <CardMedia
          component="img"
          height="240"
          image={item.imagen}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              fontWeight: 700,
            }}
          >
            {item.titulo}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.nombre}
          </Typography>
          <Typography variant="body1" color="primary" pt={2}>
            ${item.precio}
          </Typography>
        </CardContent>
        <div className={classes.btnDetailContainer}>
          <Link to={`/Item/${item.id}`} className="link">
            <Button
              size="medium"
              variant="contained"
              className={classes.btnDetail}
            >
              Ver detalles
            </Button>
          </Link>
        </div>
      </Card>
    </>
  );
};

export default Item;
