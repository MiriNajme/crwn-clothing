import React from "react";
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shops/shop";
import "./App.css";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
