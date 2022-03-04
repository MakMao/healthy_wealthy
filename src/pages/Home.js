import React from 'react'
import CardContainer from '../components/CardContainer'
import Filters from '../components/Filters'
import Products from '../components/Products'
import styled from 'styled-components'
import ProductsDiscounted from '../components/ProductsDiscounted'
import Whatever from '../components/Whatever'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div className="container">
      <CardContainer/>

      {/* <Filters/> */}
      <ProductsDiscounted/>
      {/* <Products/> */}
     <Contact/>
    </div>
  )
}


export default Home