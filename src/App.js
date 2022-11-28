import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./routes/homepage/homepage";
import Navigation from "./routes/navigation/navigation";
// import ShopPage from "./routes/shops/shop";
// import SignInAndUp from "./routes/sign-in-and-up/sign-in-and-up";
const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
        {/* <Route path="shop" element={<ShopPage />} /> */}
      </Route>
    </Routes>
  );
};

export default App;
