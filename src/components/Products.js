import React from 'react'
import { useProductsContext } from '../context/Products_context'
import Loading from './Loading'
import Error from './Error'
import styled from 'styled-components'
import Reviews from './Reviews'
import ProductDiscount from './ProductDiscount'
import ProductPrice from './ProductPrice'

const Products = ({brand, id, img, name, price, quantity, reviews, flavours, categories}) => {
  return (
      <Container>
      <div className="product" key={id}>
        <div className="top">
        <ProductDiscount img={img} price={price}/>
        </div>
        <div className="bottom">
          <div className="product-info">
            <h3>{name}</h3>
            <p>{brand}</p>
          </div>
          <Reviews feedback={reviews}/>
          <ProductPrice price={price}/>
         <div className="btn-container">
           <button>add</button>
         </div>
        </div>
      </div>
  </Container>
  )
  }


const Container = styled.div `

  .product {
    border: 2px solid var(--clr-cyan-regular);
    display: grid;
    grid-template-rows: auto 200px; 
  }

  .top {
    position: relative;
    background-color: var(--clr-cyan-light);
    display: grid;
    place-items: center;
    padding: 2em 2em 2.5em 2em;
    img {
      width: 100%;
      max-width: 250px;
      height: 200px;
      object-fit: contain;
    }
  }

  .bottom {
    align-self: flex-end;
    padding: 1em 0;
    text-align: center;
    width: 100%;
    height: 100%;
    h3 {
      text-align: center;
      margin-bottom: 0;
    }
    p {
      text-align: center;
    }
    .product-info {
      height: 70px;
    }
  }


`

export default Products