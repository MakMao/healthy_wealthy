import React, {useState} from 'react'
import { useProductsContext } from '../context/Products_context'
import Products from './Products.js'
import styled from 'styled-components'
import {paginate} from '../utils/paginate'
import Loading from './Loading'
import Error from './Error'
import Filters from './Filters'
import Sort from './Sort'


const ProductsAll = () => {
  const [index, setIndex] = useState(1)
  const {all_products: products, products_loading: loading, products_error: error} = useProductsContext()
  const newList = paginate(products)
  // console.log(newList);

  if(loading){
    return <Loading/>
  }

  if(error){
    return <Error/>
  }

  return (
    <Container>
      <Filters/>
      <div>
        <Sort/>
        <div className="product-container">
          {products.map((item) => {
            return (
              <Products key={item.id} {...item}/>
            )
          })}
        </div>
      </div>
      {/* <div className="page-container">
        {newList.map((item, index) => {
          console.log(item.length);
          return (
            <button>{index + 1}</button>
          )
        })}
      </div> */}
    </Container>
  )
}

const Container = styled.div `
  max-width: 1170px;
  margin: 0 auto;
  width: 95%;
  
  @media (min-width: 768px){
    display: grid;
    grid-template-columns: 250px 1fr;
  }

  .product-container{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5px;
  }

  @media (min-width: 768px){
    .product-container{
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    }
  }


`

export default ProductsAll