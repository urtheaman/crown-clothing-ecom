import React from 'react'
import './cart-icon.styles.scss'
import Logo from '../../assets/images/shopping-bag.svg'

const CartIcon = ({...otherProps}) => {
  return (
    <div className='cart' {...otherProps}>
        <img src={Logo} alt="Cart" className='cart-logo' />
        <span>2</span>
    </div>
  )
}

export default CartIcon