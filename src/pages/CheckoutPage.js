import React from 'react'
import StripeCheckout from '../components/StripeCheckout'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import {Link} from 'react-router-dom'

const CheckoutPage = () => {
  const {cart} = useCartContext()
  return (
    <Wrapper>
        <div className="cart-wrapper">
          {cart.length < 1 ? (
            <div>
              <div className="empty">
                <h2>your cart is empty</h2>
              </div>
              <button className="btn fill-btn">
              <Link to='/products' className="fill-btn">
                fill it
              </Link>
              </button>
            </div>
          ): (
            <StripeCheckout/>
            )}
        </div>
        <div className="the-footer">
          <h5>&copy; {new Date().getFullYear()} <span className="footer-span">Protein Store</span> All rights reserved</h5>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 10em;

.cart-wrapper{
    display: flex;
    min-height: calc(100vh - 198px);
    justify-content: center;
  }

.empty {
  margin: 9em 0 1.5em 0;
}

.fill-btn{
  color: #fff; 
}

h2 {
  margin-bottom: 2em;
  margin-top: 4em;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}

.fill-btn {
  display: flex;
  color: #fff; 
  justify-content: center;
  margin: 0 auto;
}

`

export default CheckoutPage