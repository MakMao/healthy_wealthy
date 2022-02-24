import React from 'react'
import styled from 'styled-components'
import CartButtons from './CartButtons';

const Navbar = () => {
  return (
    <NavContainer>
      <div className="small-screen">
        <img className="logo" src="https://i.imgur.com/v7fdlQS.png" alt="" />
      </div>
      <div className="big-screen">
        <div className="screen-big-left">
          <img className="logo" src="https://i.imgur.com/v7fdlQS.png" alt="" />
          <button>Left button</button>
        </div>
        <div>
          <ul>
            <li>Shops</li>
            <li>Offers</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
      <CartButtons/>
      </div>
    </NavContainer>
  )
}

const NavContainer = styled.nav `

.small-screen  {
  display: flex;
  padding: 0.5em;
  justify-content: center;
  border-bottom: 2px solid var(--clr-border);
}

.logo {
  width: 140px;
  height: 70px;
}

.big-screen {
  display: none;
  background: pink;
  padding: 0.8em;
}

.screen-big-left {
  display: flex;
  gap: 2em;
}

ul {
  display: flex;
  gap: 2em;
}


@media (min-width: 1024px){
  .small-screen {
    display: none;
  }
  .big-screen {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
`

export default Navbar