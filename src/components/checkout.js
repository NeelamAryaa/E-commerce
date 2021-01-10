import React, { useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import ClearIcon from "@material-ui/icons/Clear";
import {
  IncreaseItemQuantity,
  DecreaseItemQuantity,
  RemoveItemFromCart,
} from "../redux/cart/cart.actions";
import StripeCheckoutButton from "./stripe-button";

const useStyles = makeStyles({
  TableContainer: {
    minHeight: "77vh",
    position: "relative",
    marginTop: "65px",
  },
  icon: {
    display: "flex",
  },
  total: {
    margin: "20px",
  },
  stripebtn: {
    padding: "15px",
  },
});

const CheckoutPage = ({
  book,
  increaseQuantity,
  decreaseQuantity,
  removeItemFromCart,
}) => {
  const classes = useStyles();

  const total = book.reduce(
    (prev, next) => prev + next.quantity * next.price,
    0
  );
  console.log(total);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box className={classes.TableContainer}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell align="center">Product</TableCell>
              <TableCell align="center">Quantity</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Total</TableCell>
              <TableCell align="center">Remove</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {book.map((book) => (
              <TableRow key={book.id}>
                <TableCell component="th" scope="row">
                  <Avatar
                    alt="Book"
                    src={book.url}
                    variant="square"
                    className={classes.item}
                    display="inline"
                  />
                </TableCell>
                <TableCell align="center">{book.name}</TableCell>
                <TableCell align="center">
                  <Grid
                    container
                    direction="row"
                    alignItems="center"
                    justify="center"
                    wrap="nowrap"
                  >
                    <Grid item>
                      <NavigateBeforeIcon
                        className={classes.icon}
                        onClick={() => decreaseQuantity(book)}
                      />
                    </Grid>
                    <Grid item>
                      <span>{book.quantity}</span>
                    </Grid>
                    <Grid item>
                      <NavigateNextIcon
                        className={classes.icon}
                        onClick={() => increaseQuantity(book)}
                      />
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell align="center">{book.price}</TableCell>
                <TableCell align="center">
                  {book.quantity * book.price}
                </TableCell>
                <TableCell align="center">
                  <ClearIcon onClick={() => removeItemFromCart(book)} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Grid item xs zeroMinWidth>
        <Typography noWrap align="right" variant="h5" className={classes.total}>
          {`Total: Rs. ${total}`}
        </Typography>
      </Grid>
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="flex-end"
        className={classes.stripebtn}
      >
        <StripeCheckoutButton price={total} />
      </Grid>
      <Typography align="center" color="primary" gutterBottom={true}>
        *Please use the following test credit card for payment*
        <br />
        4242 4242 4242 4242 -- Exp: 01/22 -- CVV: 123
      </Typography>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  book: state.cart.data,
});

const mapDispatchToProps = (dispatch) => ({
  increaseQuantity: (data) => dispatch(IncreaseItemQuantity(data)),
  decreaseQuantity: (data) => dispatch(DecreaseItemQuantity(data)),
  removeItemFromCart: (data) => dispatch(RemoveItemFromCart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
