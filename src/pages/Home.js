import React from 'react'
import CardContainer from '../components/CardContainer'

import styled from 'styled-components'
import ProductsDiscounted from '../components/ProductsDiscounted'
import Contact from '../components/Contact'
import Landing from '../components/Landing'

const Home = () => {
  return (
    <Wrapper>
      <div className="home-container">
        <Landing/>
        <CardContainer/>
        <ProductsDiscounted/>
        <Contact/>
      </div>
      <div className="the-footer">
        <h5>&copy; {new Date().getFullYear()} <span className="footer-span">Protein Store</span> All rights reserved</h5>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .home-container {
    max-width: 1170px;
    margin: 0 auto;
  }
`


export default Home