import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import MenuModal from './MenuModal';
import DensitySmallOutlinedIcon from '@mui/icons-material/DensitySmallOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { useProductsContext } from '../context/Products_context';

const Menu = () => {
  const {openModal} = useProductsContext()
  return (
    <NavContainer>
      <div className="icon-container">
        <button onClick={openModal}>
          <DensitySmallOutlinedIcon className="icon"/>
        </button>
        <SearchOutlinedIcon className="icon"/>
        <HomeOutlinedIcon className="icon"/>
        <ShoppingBasketOutlinedIcon className="icon"/>
        <PersonOutlineOutlinedIcon className="icon"/>
      </div>
    </NavContainer>
  )
}

const NavContainer = styled.nav `

  .icon-container,
  > button {
    padding: 0.8em;
    background-color: pink;
    width: 100vw;
    border-top: 2px solid var(--clr-border) ;
    position: fixed;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
  }

  .icon {
    font-size: 2.5rem;
  }

  @media (min-width: 1024px){
    .icon-container{
      display: none;
    } 
  }
  
` 

export default Menu