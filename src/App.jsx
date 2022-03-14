import "./App.scss";
import Homepage from "./Pages/homepage/Homepage";
import { Route, Routes } from "react-router-dom";
import Shop from "./Pages/shop/Shop";
import Header from "./components/Header/Header";
import Auth from "./Pages/auth/Auth";
import React from "react";
import Checkout from "./Pages/checkout/checkout.comp";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/init.firebase";
import setUser from "./redux/user/user-action";
import { connect } from "react-redux";
import NotFound from "./Pages/404/NotFound";

const App = ({ setUser }) => {
  onAuthStateChanged(auth, (user) => {
    setUser(user);
    console.log("Log from App.js");
  });

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
  setUser: (user) => dispatchEvent(setUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
