import React, { Component, Fragment } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import BookItems from "./components/book-items";

import { Route, Switch } from "react-router-dom";
import CheckoutPage from "./components/checkout";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />

        <Switch>
          <Route exact path="/" component={BookItems} />

          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>

        <Footer />
      </Fragment>
    );
  }
}

export default App;
