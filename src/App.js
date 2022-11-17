import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shops/shop";
import Header from "./components/header/header";
import SignInAndUp from "./pages/sign-in-and-up/sign-in-and-up";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndUp} />
      </Switch>
    </div>
  );
}

export default App;
