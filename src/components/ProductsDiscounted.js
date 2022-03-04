import React from 'react'
import { useProductsContext } from '../context/Products_context'
import Products from './Products'
import styled from 'styled-components'
import Loading from './Loading'
import Error from './Error'
import {Link} from 'react-router-dom'

const ProductsDiscounted = () => {
  const {all_products: products, products_loading: loading, products_error: error} = useProductsContext()

  if(loading){
    return <Loading/>
  }

  if(error){
    return <Error/>
  }

  const hasDisount = products.filter((item) => item.price.discount).sort((a, b) => {
    return a.price.new - b.price.new
  })
  
  return (
    <Container>
      <div className="title">
        <h2>Discounted Products</h2>
        <div className="container grid">
          {hasDisount.slice(0, 4).map((item) => {
            return <Products key={item.id} {...item} />
          })}
        </div>
        <div className="all-btn">
          <Link className="btn" to="/products">All Products</Link>
        </div>
      </div>
    </Container>
  )
}

const Container = styled.div `
  .grid {
    display: grid;
    grid-gap: 10px 5px;
    grid-template-columns: repeat(2, 1fr);
  }
  h2 {
    text-align: center;
  }
  .all-btn{ 
    text-align: center;
    margin: 2em 0;
  }
  
`

export default ProductsDiscounted