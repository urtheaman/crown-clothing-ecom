import "./App.scss";
import Homepage from "./Pages/homepage/Homepage";
import { Route, Routes } from "react-router-dom";
import Shop from "./Pages/shop/Shop";
import Header from "./components/Header/Header";
import Auth from "./Pages/auth/Auth";
import React, { useEffect } from "react";
import Checkout from "./Pages/checkout/checkout.comp";
import { connect } from "react-redux";
import NotFound from "./Pages/404/NotFound";
import { checkUserSession } from "./redux/user/user-action";

const App = ({ checkUserSession }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Homepage />} />
          <Route path="auth" element={<Auth />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

const mapDispatchToProps = (dispatchEvent) => ({
  checkUserSession: () => dispatchEvent(checkUserSession()),
});

export default connect(null, mapDispatchToProps)(App);
