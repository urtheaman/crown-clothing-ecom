import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Header.scss";
import Logo from "../../assets/images/crown.svg";
import { connect } from "react-redux";
import CartDropdown from "../cart/cart-dropdown/cart-dropdown.comp";
import CartIcon from "../cart/cart-icon/cart-icon.comp";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectToggleHidden } from "../../redux/cart/cart.selector";

const Header = ({ currentUser, hidden }) => {
  return (
    <Fragment>
      <header className="header">
        <Link to="/" className="logo-container">
          <img src={Logo} alt="logo" />
        </Link>
        <ul className="options">
          <Link to="/shop" className="option">
            Shop
          </Link>
          <Link to="/" className="option">
            Contact
          </Link>
          {currentUser ? (
            <div className="option" onClick={() => console.log("signed out")}>
              Sign out
            </div>
          ) : (
            <Link to="/auth" className="option">
              Sign in
            </Link>
          )}
          <CartIcon />
        </ul>
        {!hidden ? <CartDropdown /> : null}
      </header>
      <Outlet />
    </Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectToggleHidden,
});
// this mapStateToPros is a function, btw we can set any name for this function but this is a convention when reading the state.
// This function gets access to the rootReducer state aka the main state of our redux store.
// and we pull out the values which we require.
// this function reads the state and set it as a prop value in the component

export default connect(mapStateToProps)(Header);
