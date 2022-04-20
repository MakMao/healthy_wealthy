import React, {useState} from 'react'
import { useProductsContext } from '../context/Products_context'
import Products from './Products.js'
import styled from 'styled-components'
import Loading from './Loading'
import Error from './Error'
import Filters from './Filters'
import Sort from './Sort'
import { useFilterContext } from '../context/Filters_context'


const ProductsAll = () => {
  const {products_loading: loading, products_error: error} = useProductsContext()
  const {filter_products, windowWidth} = useFilterContext()
  const [count, setCount] = useState(12)

  if(loading){
    return <Loading/>
  }

  if(error){
    return <Error/>
  }

  if(windowWidth >= 768){
    return (
      <Container>
        <Filters/>
        <div>
          <Sort/>
          <div className="product-container">
            {filter_products.length < 1 ? 
            <div className="nothing-found">
              <h5>No products matched your search criteria</h5>
            </div> : 
            filter_products.slice(0, (count)).map((item) => {
              return (
                <Products key={item.id} {...item}/>
              )
            })}

          </div>
          {(count < filter_products.length ) && <div className="btn-container">
              <button onClick={() => setCount(prev => prev + 12)} className="btn">
                show more products
                </button>
            </div>}
        </div>
      </Container>
    )
  }

  if(windowWidth < 768){
    return (
      <Container>
        <div>
          <Sort windowWidth={windowWidth}/>
          <div className="product-container">
          {filter_products.length < 1 ? 
            <div className="nothing-found-small">
              <h5>No products matched your search criteria</h5>
            </div> : 
            filter_products.slice(0, (count)).map((item) => {
              return (
                <Products key={item.id} {...item}/>
              )
            })}
          </div>
          {(count < filter_products.length ) && <div className="btn-container">
              <button onClick={() => setCount(prev => prev + 12)} className="btn">
                show more products
                </button>
            </div>}
        </div>
      </Container>
    )
  }
}

const Container = styled.div `
  max-width: 1170px;
  margin: 0 auto;
  padding-bottom: 3em; 
  width: 95%;
  
  @media (min-width: 768px){
    display: grid;
    grid-template-columns: 230px 1fr;
  }

  .nothing-found {
    margin: 0 auto;
    padding-top: 1em ;
  }

  .nothing-found-small {
    width: calc(100vw - 20px);
    margin-top: 2em;
    display: flex;
    justify-content: center;
  }

  .btn-container {
    display: flex;
    justify-content: center;
    margin: 1.5em 0;
  }


  .product-container{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5px;
  }

  @media (min-width: 768px){
    .product-container{
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
  }
`

export default ProductsAll