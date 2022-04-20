
import React, { useEffect } from 'react'
import { useParams} from 'react-router-dom'
import { useProductsContext } from '../context/Products_context'
import styled from 'styled-components'
import ProductSingleImg from '../components/ProductSingleImg'
import ProductSingleInfo from '../components/ProductSingleInfo'
import Loading from '../components/Loading'
import Hero from '../components/Hero'
import Error from '../components/Error'
import { useFilterContext } from '../context/Filters_context'

const SingleProductPage = () => {
  const {fetchSingleProduct, single_products: products, single_product_loading: loading, single_product_error: error} = useProductsContext()
  const {clearFilters} = useFilterContext()
  let {id} = useParams()
  
  const {images, name} = products
  
  useEffect(() => {
    fetchSingleProduct(`https://my-protein-api.herokuapp.com/single-product?id=${id}`)
    clearFilters()
  }, [id])

  if(loading) {
    return <Loading/>
  }

  if(error){
    return <Error/>
  }
  
  return (
    <Container>
      <Hero title={name} product/>
      <div className="single-product">
        <ProductSingleImg images={images}/>
        <ProductSingleInfo products={products}/>
      </div>

    </Container>
  )
}

const Container = styled.div `
  margin: 0 auto;
  
  .single-product {
    margin-bottom: 5em;
  }

  .single-product {
    @media (min-width: 768px){
      display: grid;
      max-width: 1170px;
      justify-content: center;
      width: 95%;
      margin: 0 auto;
      grid-template-columns: 1fr 400px;
      margin-bottom: 2em;
    }
  }
`

export default SingleProductPage
