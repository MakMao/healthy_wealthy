import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Reviews from './Reviews'
import ProductDiscount from './ProductDiscount'
import ProductPrice from './ProductPrice'

const Products = ({brand, id, img, name, price, reviews}) => {
  return (
      <Container>
      <div className="product" key={id} >
        <Link to={`/products/${id}`} className="top">
          <ProductDiscount img={img} price={price}/>
        </Link>
        <div className="bottom">
          <div className="product-info">
            <h3 className="product-name">{name}</h3>
            <p className="product-brand">{brand}</p>
          </div>
          <Reviews feedback={reviews}/>
          <ProductPrice price={price}/>
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
    cursor: pointer;
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

  .product-name {
    text-transform: uppercase;
  }

  .product-brand {
    margin-top: 0.5em ;
  }

  .bottom {
    align-self: flex-end;
    padding: 1.5em 0;
    text-align: center;
    width: 100%;
    height: 100%;
    h3 {
      text-align: center;
      margin-bottom: 0;
    }
    .product-info {
      height: 70px;
    }
  }


`

export default Products