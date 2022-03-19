import React from 'react'
import './cart-icon.styles.scss'
import Logo from '../../../assets/images/shopping-bag.svg'
import { connect } from 'react-redux'
import { selectCartItemsCount } from '../../../redux/cart/cart.selector'
import { toggleHiddenState } from '../../../redux/cart/cart.action'
import { createStructuredSelector } from 'reselect'

const CartIcon = ({totalItems, setHidden}) => {
  return (
    <div className="cart" onClick={setHidden}>
      <img src={Logo} alt="Cart" className="cart-logo" />
      <span>{totalItems}</span>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  totalItems: selectCartItemsCount
})

const mapDispatchToProps = (dispatchEvent) => ({
  setHidden: () => dispatchEvent(toggleHiddenState()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)