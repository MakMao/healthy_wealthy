import React from 'react'
import styled from 'styled-components'
import CartButtons from './CartButtons';
import DensitySmallOutlinedIcon from '@mui/icons-material/DensitySmallOutlined';


const Navbar = () => {
  return (
    <NavContainer>
      <div className="nav-container">
      <div className="nav-header">
        <div className="menu-icon">
          <DensitySmallOutlinedIcon/>
        </div>
        <div className="loging-container">
        <CartButtons/>
        </div>
      </div>
      <form>
        <div className="form-control">
          <input type="text" placeholder="Search by prouduct.." />
        </div>
      </form>
      <h3 className="logo">Logo</h3>
      </div>
    </NavContainer>
  )
}

const NavContainer = styled.nav `
  position: relative;
  margin-bottom: 8em;
  
  .nav-container {
    background-color: #088494;
    padding: 0.7em;
    position: fixed;
    z-index: 5000;
    top: 0;
    left: 0;
    width: 100%;
  }

  .nav-header {
    display: flex;
    color: #fff;
    justify-content: space-between;
    align-items: center;
  }

  input{
    width: 100%;
  }

  .logo {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    padding-top: 0.7em;
  }




`

export default Navbar