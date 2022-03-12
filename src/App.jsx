import "./App.scss";
import Homepage from "./Pages/homepage/Homepage";
import { Outlet, Route, Routes } from "react-router-dom";
import Shop from "./Pages/shop/Shop";
import Header from "./components/Header/Header";
import Auth from "./Pages/auth/Auth";
import React from "react";
import Checkout from "./Pages/checkout/checkout.comp";
import Category from "./Pages/shop/category/category.comp";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Homepage />} />
        <Route path="auth" element={<Auth />} />
        <Route path="checkout" element={<Checkout />} />
        <Route exact path="shop" element={<Outlet />}>
          <Route index element={<Shop />} />
          <Route path=":categoryId" element={<Category />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
