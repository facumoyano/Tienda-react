import React from "react";
import { AppBar, Button, Menu, MenuItem, Toolbar } from "@mui/material";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { Box } from "@mui/system";
import { useCartContext } from "../context/CartContext";


const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
}));

const NavBar = () => {
  const classes = useStyles();
  const { count } = useCartContext();


  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const openMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  return (
    <>
      <AppBar>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Link to="/" variant="h5" className="link">
            TIENDA ORIGIN
          </Link>
          <Box
            sx={{
              display: "flex",
              justifiContent: "flex-end",
            }}
          >
            <Button
              onClick={openMenu}
              sx={{
                color: "white",
              }}
            >
              Categorías
            </Button>
            <Menu
              id="lame-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <Link to="/category/hombre" className="textDecoration">
                <MenuItem onClick={handleClose}>Hombre</MenuItem>
              </Link>
              <Link to="/category/mujer" className="textDecoration">
                <MenuItem onClick={handleClose}>Mujer</MenuItem>
              </Link>
            </Menu>
            <Link to="/cart" className="link">
              <CartWidget />
            </Link>
            <p> {count} </p>
          </Box>
        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
    </>
  );
};

export default NavBar;
