import React from 'react'
import styled from 'styled-components'
import { useProductsContext } from '../context/Products_context'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {links} from '../utils/links'
import {Link} from 'react-router-dom'
import CartButtons from './CartButtons';
import { useUserContext } from '../context/user_context';
import { useCartContext } from '../context/cart_context';


const SidebarMenu = () => {
  const {open_menu, closeMenu} = useProductsContext()
  const {user} = useUserContext()
  const {total_items} = useCartContext()

  return (
    <Container>
      <div className={`${open_menu ? 'modal open' : 'modal'}`}>
        <div className="menu-header">
          <h2>LOGO</h2>
          <button onClick={closeMenu} className="close-menu-btn">
            <CloseRoundedIcon/>
          </button>
        </div>
        <div className="underline"></div>
        <div className="links-container">
          {links.map((item, i) => {
            const {id, text, url} = item
            return (
              <Link to={url} onClick={closeMenu} key={i}>
                <p className="link" >{text === 'Checkout' ? user && text : text}</p>
              </Link>
            )
          })} 
          <div className="underline"></div>
          </div>
          <div className="login-details">
            <CartButtons/>
            <p className="total-items">{total_items}</p>
            {user && <p className="welcome">Welcome, {user}</p>}
          </div>
      </div>
    </Container>
  )
}

const Container = styled.div`
.modal{ 
  position: fixed;
  width: 100%;
  height: 100vh;
  padding: 1em;
  top: 0;
  left: 0;
  transform: translateX(-100%);
  background-color: var(--clr-cyan-light);
  display: grid;
  grid-template-rows: auto auto auto 1fr ;
  opacity: 1; 
  transition: 0.3s;
  z-index: 3;
}

.login-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 25px;
  position: relative;
}

.total-items {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  color: #fff;
  width: 15px;
  height: 15px;
  font-weight: 700;
  font-size: 12px;
  top: -5px; 
  left: 122px; 
  border-radius: 100%;
  background-color: var(--clr-cyan-v-dark); 
  padding: 0.7em;
}

.welcome, .link {
  color: var(--clr-cyan-v-dark);
}

.links-container {
  margin: 2em 0;
  display: flex;
  flex-direction: column;
  row-gap: 2em;
}

.menu-header{
  margin-top: 1em;
}

button {
  display: flex;
  justify-content: center;
  align-items: center;
}

.close-menu-btn {
  transition: 0.3s;
  background-color: var(--clr-cyan-regular);
  border-radius: 50%;
  padding: 0.3em;
  cursor: pointer;
  border: 0;
}

.close-menu-btn:hover{
  transform: scale(1.15);
}

.menu-header{
  display: flex;
  justify-content: space-between;
}

.open {
  transform: translateX(0);
  transition: 0.3s;
}

`

export default SidebarMenu