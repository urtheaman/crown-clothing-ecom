import "./App.scss";
import Homepage from "./Pages/homepage/Homepage";
import { Route, Routes } from "react-router-dom";
import Shop from "./Pages/shop/Shop";
import Header from "./components/Header/Header";
import Auth from "./Pages/auth/Auth";
import React from "react";
import Checkout from "./Pages/checkout/checkout.comp";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Homepage />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Auth />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
