import React from "react";
import {
  AppBar,
  Button,
  Menu,
  MenuItem,
  Toolbar,
  Drawer,
  List,
  ListItem,
} from "@mui/material";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { Box } from "@mui/system";
import { useCartContext } from "../context/CartContext";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { red } from "@mui/material/colors";
import CategoryIcon from '@mui/icons-material/Category';

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  cartWidget: {
    color: red[400],
    textDecoration: "none",
  },
  cart: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  cartLenght: {
    fontSize: "25px",
  },
  buttons: {
    color: "primary",
    padding: '30px 0',
    fontSize:'15px'
  },
  "@media (max-width: 768px)": {
    menuResponsive: {
      display: "none",
    },
  },
  "@media (min-width: 768px)": {
    menuIcon: {
      display: "none",
    },
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const { cartLenght } = useCartContext();

  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

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
          <div className={classes.menuResponsive}>
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
              <p> {cartLenght()} </p>
            </Box>
          </div>
          <div className={classes.menuIcon}>
            <Button sx={{ color: "white" }} onClick={handleDrawerOpen}>
              <MenuIcon />
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer variant="persistent" anchor="right" open={open}>
        <List>
          <ListItem>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifiContent: "flex-end",
                color: red[400],
              }}
            >
              <Button onClick={handleDrawerClose}>
                <ArrowForwardIosIcon />
              </Button>
              <Button
                onClick={openMenu}
                className={classes.buttons}
                sx={{margin: '20px 0'}}
              >
                <CategoryIcon color="primary" sx={{marginRight: '10px'}} />
                Categorías
              </Button>
              <Menu
                id="lame-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                color="primary"
              >
                <Link to="/category/hombre" className="textDecoration">
                  <MenuItem onClick={handleClose}>Hombre</MenuItem>
                </Link>
                <Link to="/category/mujer" className="textDecoration">
                  <MenuItem onClick={handleClose}>Mujer</MenuItem>
                </Link>
              </Menu>
              <div className={classes.cart}>
                <Link to="/cart" color="primary" className={classes.cartWidget}>
                <Button
                className={classes.buttons}
                sx={{margin: '20px 0'}}
              ><CartWidget  />
                Carrito
              </Button>
                </Link>
                <p className={classes.cartLenght}> {cartLenght()} </p>
              </div>
            </Box>
          </ListItem>
        </List>
      </Drawer>
      <div className={classes.offset}></div>
    </>
  );
};

export default NavBar;
