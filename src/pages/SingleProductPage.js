import { FactorySharp } from '@mui/icons-material'
import React, { useEffect } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import { useProductsContext } from '../context/Products_context'
import styled from 'styled-components'
import ProductSingleImg from '../components/ProductSingleImg'
import ProductSingleInfo from '../components/ProductSingleInfo'

const SingleProductPage = () => {
  const {fetchSingleProduct, single_products: products} = useProductsContext()
  let {id} = useParams()
  // console.log(products);

  // {products.map((product) => {
  //   console.log(product);
  // })}
  const {brand, description, categories, flavours, images, name, nutritiion_facts, price, quantity, reviews, stock} = products
  
  
  useEffect(() => {
    fetchSingleProduct(`https://my-protein-api.herokuapp.com/single-product?id=${id}`)
  }, [id])

  return (
    <Container>
      <ProductSingleImg images={images}/>
      <ProductSingleInfo products={products}/>
    </Container>
  )
}

const Container = styled.div `
  @media (min-width: 768px){
    display: grid;
    justify-content: center;
    margin: 0 auto;
    grid-template-columns: 1fr 400px;
    max-width: 1170px;
  }
`

export default SingleProductPage

//gSrXKigVE3