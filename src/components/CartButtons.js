import React from 'react'
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import PersonRemoveOutlinedIcon from '@mui/icons-material/PersonRemoveOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { useUserContext } from '../context/user_context';
import { useFilterContext } from '../context/Filters_context';
import { useProductsContext } from '../context/Products_context';
import { useCartContext } from '../context/cart_context';


const CartButtons = () => {
  const {user, logOut} = useUserContext() 
  const {windowWidth} = useFilterContext()
  const {open_menu, closeMenu} = useProductsContext()
  const {total_items} = useCartContext()

  if(windowWidth < 768 && !open_menu) {
    return (
      <Wrapper>
        <Link to="/cart" className="login-person login-person-nav" >
          <ShoppingCartOutlinedIcon/>
          <p className="total-items">{total_items}</p>
          <h5 className="btn-text">Cart</h5>
        </Link>
      </Wrapper>
    )
  }

  if(!open_menu) {
    return (
      <Wrapper onClick={closeMenu}>
        {user ? 
        (<button onClick={logOut} className="login-person login-person-nav">
          <PersonRemoveOutlinedIcon />
          {windowWidth > 950 && <h5 className="btn-text">Logout</h5>}
        </button>) : 
       (<Link to="/login" >
          <button className="login-person login-person-nav">
            <PersonAddAltOutlinedIcon />
            {windowWidth > 950 && <h5 className="btn-text">Login</h5>}
          </button>
         </Link>)}
      
        <Link to="/cart" className="login-person login-person-nav">
          <ShoppingCartOutlinedIcon/>
          <p className="total-items">{total_items}</p>
          <h5 className="btn-text">Cart</h5>
        </Link>
      </Wrapper>
    )
  }

  return (
    <Wrapper onClick={closeMenu}>
    {user ? 
    (<button onClick={logOut} className="login-person login-person-menu">
      <PersonRemoveOutlinedIcon />
      <h5 className="btn-text">Logout</h5>
    </button>) : 
   (<Link to="/login" >
      <button className="login-person login-person-menu">
        <PersonAddAltOutlinedIcon />
        <h5 className="btn-text">Login</h5>
      </button>
     </Link>)}
  
    <Link to="/cart" className="login-person login-person-menu">
      <ShoppingCartOutlinedIcon/>
      <h5 className="btn-text">Cart</h5>
    </Link>
  </Wrapper>
  )
}


export default CartButtons

const Wrapper = styled.div `
  display: flex;
  column-gap: 2em;

  .login-person {
    display: flex;
    align-items: center;
    column-gap: 0.5em;
    background: transparent;
    border: none;
    position: relative;
  }

  .btn-text {
    font-weight: 400;
  }

  .total-items{
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--clr-cyan-dark);
    z-index: 2;
    width: 15px;
    height: 15px;
    top: -5px; 
    right: 35px; 
    font-weight: 700;
    font-size: 12px;
    border-radius: 100%;
    background-color: #fff; 
    padding: 0.60em;
  }

  .login-person-nav {
    color: #fff;
  }

  .login-person-menu {
    color: var(--clr-cyan-v-dark);
  }

`