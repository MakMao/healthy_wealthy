import React from 'react'
import {Link} from 'react-router-dom' 
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'

const CartBtnContainer = () => {
  const {clearCart} = useCartContext()
  return (
    <Container>
      <Link to="/products" className="btn">Continue Shopping</Link>
      <button className="btn" onClick={clearCart}>Clear Cart</button>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em;
  white-space: nowrap;
`

export default CartBtnContainer