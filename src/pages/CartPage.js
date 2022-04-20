import React from 'react'
import Cart from '../components/Cart'
import styled from 'styled-components'
import Hero from '../components/Hero'

const CartPage = () => {
  return (
    <Container>
      <Hero title="Cart"/>
      <div className="cart-container">
        <Cart/>
      </div>
      <div className="the-footer">
        <h5>&copy; {new Date().getFullYear()} <span className="footer-span">Protein Store</span> All rights reserved</h5>
      </div>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 5em;
  
  .cart-container {
    margin: 0 auto;
    width: 95%;
    min-height: calc(100vh - 266px);
  }
  
  @media (min-width: 768px) {
    .cart-container {
      width: 99%;
      min-height: calc(100vh - 296px);
      padding: 0 0.5em;
    }
  }
`

export default CartPage