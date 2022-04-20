import React from 'react'
import styled from 'styled-components'
import CartButtons from './CartButtons';
import DensitySmallOutlinedIcon from '@mui/icons-material/DensitySmallOutlined';
import { useUserContext } from '../context/user_context';
import { Link} from "react-router-dom";
import { useFilterContext } from '../context/Filters_context';
import Slider from '../components/Slider'
import { useProductsContext } from '../context/Products_context';
import {links} from '../utils/links'
import logo from '../images/logo.png'

const Navbar = () => {
  const {user} = useUserContext()
  const {windowWidth} = useFilterContext()
  const {openMenu, closeMenu} = useProductsContext()

  if(windowWidth >= 768){
    return (
      <NavContainer>
          <div className="main-div">
            <div className="nav-container">
              <div className="slider-container">
               <Slider/>
              </div>
              <div className="big-nav-header">
                <Link to="/" className="logo-big">
                  <img src={logo} alt="company's logo" className="logo-company-big"/>
                </Link>
                <div className="nav-options">
                  {links.map((item, i) => {
                    const {text, url} = item
                    return (
                    <div key={i}>
                      <Link to={url} onClick={closeMenu}>
                        <p className="link">{text === 'Checkout' ? user && text : text}</p>
                      </Link>
                    </div>)})}
                  </div>
                  <div className="login-container big-login-container">
                    {user && <p className="welcome">Welcome, {user}</p>}
                    <CartButtons/>
                  </div>
                </div>
            </div>
          </div>
      </NavContainer>
    )
  }
  
  if(windowWidth < 768){
    return (
      <NavContainer>
        <div className="nav-container">
          <div className="nav-header">
            <div>
              <Link to="/products">
              <button onClick={openMenu} className="open-menu-btn">
                <DensitySmallOutlinedIcon/>
              </button>
              </Link>
            </div>
            <div className="login-container">
              <CartButtons/>
            </div>
          </div>
          <Link to="/">
            <img src={logo} alt="company's logo" className="logo logo-company-small"/>
          </Link>
        </div>
      </NavContainer>
    )
  }

}

const NavContainer = styled.nav `

/* .main-div {
  width: 50%;
  max-width: 1170px;
  background: pink;
} */

.nav-container {
    position: fixed;
    background-color: var(--clr-cyan-dark);
    top: 0;
    left: 0;
    width: 100%;
    z-index: 11;
  }

  .link {
    color: #fff;
    transition: var(--transition-fast);
    border-bottom: 1px solid transparent;
  }

  .link:hover{
    border-bottom: 1px solid white;
  }

  .nav-options {
    display: flex;
    gap: 1em;
  }

  .open-menu-btn {
    background: transparent;
    border: 0;
    transition: 0.3s;
    color: #fff;
  }

  .open-menu-btn:hover{
    transform: scale(1.15);
  }

  .welcome {
    margin-right: 2em;
    color: #fff;
    text-transform: capitalize;
  }

  .logo-big {
    place-self: center start;
  }

  .nav-header,
  .big-nav-header {
    padding: 1em;
  }

  .slider-container{ 
    display: none;
    background: var(--clr-cyan-light);
    width: 100%;
    padding: 0.2em 0;
  }
  .holder{ 
    display: flex;
    justify-content: center;
  }

  .login-container{
    display: flex;
    align-items: center;
  }

  .nav-header {
    width: 100%; 
    display: flex;
    color: #fff;
    justify-content: space-between;
    align-items: center;
  }

  .big-nav-header{
    display: grid;
    max-width: 1170px;
    width: 95%;
    padding-left: 0;
    padding-right: 0;
    margin: 0 auto;
    grid-template-columns: repeat(3, 1fr);
    place-items: center; 
  }

  .big-login-container {
    place-self: center end;
  }

  .logo {
    position: absolute;
    top: 3px;
    left: 50%;
    transform: translateX(-50%);
    padding-top: 0.7em;
  }

  @media (min-width: 768px){
    .menu-icon {
      display: none;
    }
    .slider-container{
      display: flex;
    }
  }
`

export default Navbar