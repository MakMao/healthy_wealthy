import React from 'react'
import styled from 'styled-components'
import stars from '../images/stars.png'
import {Link} from 'react-router-dom'

const Landing = () => {
  return (
    <Cointainer>
      <div className="wrapper">
        <div className="left">
          <h1>Premium brands only! </h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti suscipit nisi minima accusamus, amet dolorem magni a voluptates assumenda non distinctio nemo quidem! Optio non earum asperiores repellendus dolore fugit.</p>
          <Link to="/products">
            <button className="btn">Shop Now</button>
          </Link>
        </div>
        <div className="right">
          <img src={stars} alt="5 stars" className="landing-img" />
        </div>
      </div>
    </Cointainer>
  )
}

const Cointainer = styled.div`
.wrapper {
  width: 95%;
  margin: 0 auto;
  height: calc(100vh - 100px);
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
}

  @media (max-width: 768px){
  .right {
    display: none;
  }

  .wrapper {
    display: flex;
    justify-content: center;
    text-align: center;
    }
  }

  h1 {
    margin-bottom: 1em;
  }

  p {
    line-height: 32px;
    margin-bottom: 1em;
  }

  .right,
  .left {
    place-self: center;
  }

  .landing-img {
    width: 80%;
    max-width: 250px;
  }
`

export default Landing