import React from "react";
import AppBar from "@material-ui/core/AppBar";
import MenuBookRoundedIcon from "@material-ui/icons/MenuBookRounded";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Toolbar from "@material-ui/core/Toolbar";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CartItems from "./cart-item";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ToggleCart } from "../redux/cart/cart.actions";

const Header = ({ counter, toggleCart, toggle }) => {
  const useStyles = makeStyles((theme) => ({
    icon: {
      textDecoration: "none",
      color: "white",
      marginRight: theme.spacing(2),
    },
    carticon: {
      position: "absolute",
      right: "24px",
      color: "white",
    },
  }));

  const classes = useStyles();

  return (
    <AppBar position="fixed">
      <Toolbar style={{ position: "relative" }}>
        <Link to="/">
          <MenuBookRoundedIcon className={classes.icon} />
        </Link>
        <Typography variant="h6" color="inherit" noWrap>
          Aryaa Book Collection
        </Typography>
        <IconButton className={classes.carticon} aria-label="cart">
          <Badge badgeContent={counter} color="secondary">
            <ShoppingCartIcon onClick={toggleCart} />
          </Badge>
        </IconButton>
        {toggle ? <CartItems /> : null}
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = (state) => ({
  counter: state.cart.counter,
  toggle: state.cart.toggle,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(ToggleCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
