import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./routes/homepage/homepage";
import Navigation from "./routes/navigation/navigation";
import Authentication from "./routes/authentication/authentication";
// import ShopPage from "./routes/shops/shop";
const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
        {/* <Route path="shop" element={<ShopPage />} /> */}
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
