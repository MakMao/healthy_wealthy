import React from 'react'
import { useCartContext } from '../context/cart_context'
import styled from 'styled-components'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'
import CartSummary from './CartSummary'
import CartBtnContainer from './CartBtnContainer'
import { useUserContext } from '../context/user_context'

const Cart = () => {
  const {cart} = useCartContext()
  const {user} = useUserContext()

  if(cart.length === 0){
    return (
      <div className="empty-cart">
        <h2 className="empty-cart-title">There are currently no items in your basket.</h2>
        <Link to="/products" className="btn">Continue Shopping</Link>
      </div>
    )
  }

  return (
    <Container >
      <div className="cart-container">
        <div>
          <div className="cart-item-holder">
            {cart.map((item) => {
              return (
                <CartItem key={item.id} {...item}/>
              )
            })}
          </div>
          <CartBtnContainer/>
        </div>
        <div className="part-two">
          <CartSummary/>
          {user? (<Link to="/checkout" className="checkout-btn">
          <button className="btn checkout-btn">PROCEED TO CHECKOUT</button>
          </Link>) : (<Link to="/login" className="checkout-btn">
              <button className="btn checkout-btn">LOGIN</button>
          </Link>)}
        </div>
      </div>
    </Container>
  )
}

const Container = styled.div`
  margin: 0 auto;
  max-width: 1170px;
  padding-bottom: 3em;

  @media (min-width: 768px){
    .cart-container{
      display: grid;
      grid-template-columns: auto 300px;
      column-gap: 40px;
      margin: 0;
    }
  }

  .checkout-btn {
    width: 100%;
    margin-top: 1.5em;
    color: #fff;
  }

  img {
    max-width: 90px;
    height: 100px;
    margin-right: 1.5em ;
    object-fit: contain;
  }

`

export default Cart