import React, { Fragment, useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

const StripeCheckoutButton = ({ price }) => {
  console.log(price);
  const priceforstripe = price * 100;
  const publishablekey =
    "pk_test_51HuZtDGx8NH7JgjfoBCdD7Wv1U2QGy0OZvSmOPO4kjPopvHtuaQ6bnjDK5M085uvKImzQygHgssq4hClhgCB2w0B00hnvumdI3";

  const [state, setState] = useState(false);

  const onToken = (token) => {
    console.log(token);
    setState(true);
  };

  return (
    <Fragment>
      {state ? (
        <Snackbar
          open={state}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          autoHideDuration={7000}
          onClose={() => setState(false)}
          message="Payment successful"
        >
          <Alert variant="filled" severity="success">
            Payment successful
          </Alert>
        </Snackbar>
      ) : null}
      <StripeCheckout
        label="Pay Now"
        name="Aryaa Book Collection"
        image="/assets/book.svg"
        description={`Your total is ${price}`}
        currency="INR"
        amount={priceforstripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishablekey}
      />
    </Fragment>
  );
};

export default StripeCheckoutButton;
