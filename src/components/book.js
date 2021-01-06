import React from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { Shop_Data } from "../shop.data/shop.data";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { AddCartItem } from "../redux/cart/cart.actions";
import { Counter } from "../redux/counter/counter.actions";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    // height: "300px",
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const Book = ({ addData, counter }) => {
  const classes = useStyles();

  const onClickHandler = (book) => {
    counter();
    addData(book);
  };

  return (
    <Grid container spacing={4}>
      {Shop_Data.map((book) => (
        <Grid item key={book.id} xs={12} sm={6} md={4} lg={3}>
          <Card className={classes.card}>
            <CardMedia
              style={{
                background: `grey url(${book.url}) center no-repeat `,
                backgroundSize: "contain",
              }}
              className={classes.cardMedia}
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                {book.name}
              </Typography>
              <Typography>{book.about}</Typography>
            </CardContent>
            <Box display="flex" justifyContent="space-between" m={2}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => onClickHandler(book)}
              >
                Add To Cart
              </Button>
              <Chip
                style={{ opacity: "1" }}
                label={"Rs. " + book.price}
                color="secondary"
                disabled
              />
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

const mapDipatchToProps = (dispatch) => ({
  addData: (book) => dispatch(AddCartItem(book)),
  counter: () => dispatch(Counter()),
});

export default connect(null, mapDipatchToProps)(Book);
