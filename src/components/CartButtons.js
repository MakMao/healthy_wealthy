import React from 'react'
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import styled from 'styled-components'


const CartButtons = () => {
  return (
    <Wrapper>
      <div className="container login-container">
        <PersonAddAltOutlinedIcon className="icon icon-one"/><span>Login</span>
      </div>
      <div className="container">
        <ShoppingCartOutlinedIcon className="icon icon-two"/><span className="cart-amount">8</span><span>Basket</span>
      </div>
    </Wrapper>
  )
}

export default CartButtons

const Wrapper = styled.div `
  display: flex;
  column-gap: 2rem;

.container {
  display: flex;
  align-items: center;
  span{
    margin-bottom: -0.8rem;
  }
}

.login-container {
  position: relative;
}

.cart-amount {
  position: absolute;
  padding: 0.5em;
  border-radius: 50%;
  font-size: 1.3rem;
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items:center;
  background: yellow;
  top: 20px;
  right: 80px;
}

.icon-one {
  font-size: 2.5rem;
}

.icon-two {
  font-size: 2.2rem;
}

span{
  align-items: flex-end;
}

/* .icon:hover {
  color: var(--clr-green-dark);
} */
`