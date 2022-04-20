import React from 'react'
import Hero from '../components/Hero'
import ProductsAll from '../components/ProductsAll'
import styled from 'styled-components'

const ProductsPage = () => {

  return (
    <Container>
      <div className="products-container">
        <Hero title="Products"/>
        <ProductsAll/>
      </div>
      <div className="the-footer">
        <h5>&copy; {new Date().getFullYear()} <span className="footer-span">Protein Store</span> All rights reserved</h5>
      </div>
    </Container>
  )
}

const Container = styled.div`
  .products-container {
    min-height: calc(100vh - 118px);
  }
`


export default ProductsPage