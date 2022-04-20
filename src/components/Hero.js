import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Hero = ({title, product}) => {
  return (
    <Container>
      <div>
        <div className="line"></div>
        <h3>
          <Link to="/" className="home">Home</Link>
          {product && <Link to="/products"><span>/</span><span>Products</span></Link>}
          <span>/</span> <span className="title">{title}</span>
        </h3>
        <div className="line"></div>
      </div>
    </Container>
  )
}

const Container = styled.div `
  width: 95%; 
  padding: 1.5em 0;
  margin: 0 auto;
  max-width: 1170px;

  h3 {
    padding: 0.8em 0;
  }

  .title {
    text-transform: capitalize;
  }

  .line {
    height: 2px;
    width: 100%;
    background-color: var(--clr-cyan-regular);
  }
  
  span:active{
    color: red;
  }

  span,
  .home {
    padding-right: 1em;
    color: var(--clr-cyan-v-dark) !important; 
  }
`

export default Hero