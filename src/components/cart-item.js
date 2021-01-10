import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import { ToggleCart } from "../redux/cart/cart.actions";

const useStyles = makeStyles({
  root: {
    width: 230,
    overflow: "auto",
    height: "318px",
    position: "absolute",
    top: "64px",
    right: "0px",
  },
  cardcontent: {
    minHeight: 235,
    paddingTop: "0",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: "22px",
    padding: "4px",
    textAlign: "center",
    fontWeight: "600",
  },
  pos: {
    marginBottom: 12,
  },
  btndiv: {
    display: "flex",
    justifyContent: "center",
  },
  btn: {
    width: "90%",
    height: "35px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    border: "1px solid red",
    borderRadius: "20px",
    textDecoration: "none",
    color: "white",
    background: "#f50057",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
  },
  item: {
    width: "20%",
  },
  name: {
    width: "60%",
    marginLeft: "auto",
  },
  item_container: {
    display: "flex",
    flexDirection: "column",
    margin: "5px",
  },
  item_cntr: {
    display: "flex",
    margin: "3px",
  },
});

const CartItems = ({ book, toggleCart }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardcontent}>
        <Box className={classes.item_container}>
          <Box className={classes.title}>Your Cart</Box>
          {book
            ? book.map((obj, index) => (
                <Box
                  styles={{ overflow: "auto" }}
                  className={classes.item_cntr}
                  key={index}
                >
                  <Avatar
                    alt="Book"
                    src={obj.url}
                    variant="square"
                    className={classes.item}
                    display="inline"
                  />
                  <Box className={classes.name} display="inline">
                    <Box display="block">{obj.name}</Box>
                    <Box display="block">
                      {obj.quantity} X {"Rs. " + obj.price}
                    </Box>
                  </Box>
                </Box>
              ))
            : null}
        </Box>
      </CardContent>
      <CardActions className={classes.btndiv}>
        <Link
          to="/checkout"
          variant="contained"
          color="secondary"
          className={classes.btn}
          onClick={toggleCart}
        >
          Checkout
        </Link>
      </CardActions>
    </Card>
  );
};

const mapStateToProps = (state) => ({
  book: state.cart.data,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(ToggleCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItems);
