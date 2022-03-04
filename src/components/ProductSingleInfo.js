import React, {useState} from 'react'
import styled from 'styled-components'
import Reviews from './Reviews'
import CheckIcon from '@mui/icons-material/Check';
import ProductPrice from './ProductPrice';
import AddProduct from './AddProduct';

const ProductSingleInfo = ({products}) => {
  const [showAll, setShowAll] = useState(false)
  const {brand, description, categories, flavours, images, name, nutrition_facts =[''], price, quantity, reviews= [{rating: ""}], stock} = products

  return (
    <Container>
      <h2>{name}</h2>
      <p>{brand}</p>
      <Reviews feedback={reviews}/>
      <div className="fact-container">
        {nutrition_facts.map((fact, index) => {
          return (
            <div key={index} className="fact">
              <CheckIcon/>
              <p>{fact}</p>
            </div>
          )
        })}
      </div>
      <div className="product-details">
        <h3>Details</h3>
        <p>{`${showAll ? description : `${description?.substring(0, 100)}...` }`}</p>
        <button className="btn" onClick={() => setShowAll(!showAll)}>{showAll ? "Show Less": "Show More"}</button>
      </div>
      <ProductPrice price={price}/>
      <AddProduct stock={stock}/>
    </Container>
  )
}

const Container = styled.div `
  text-align: center;
  margin: 1em;

  .fact-container {
    margin: 1em 0;
  }

  .fact{
    display: flex;
    align-items: center;
  }
  .product-details {
    text-align: left;
  }
`

export default ProductSingleInfo