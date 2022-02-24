import React from 'react'
import styled from 'styled-components'
import DensitySmallOutlinedIcon from '@mui/icons-material/DensitySmallOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const Menu = () => {
  return (
    <NavContainer>
      <div className="icon-container">
        <DensitySmallOutlinedIcon className="icon"/>
        <SearchOutlinedIcon className="icon"/>
        <HomeOutlinedIcon className="icon"/>
        <ShoppingBasketOutlinedIcon className="icon"/>
        <PersonOutlineOutlinedIcon className="icon"/>
      </div>
    </NavContainer>
  )
}

const NavContainer = styled.nav `

  .icon-container {
    padding: 0.8em;
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