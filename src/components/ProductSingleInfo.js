import React, {useState} from 'react'
import styled from 'styled-components'
import Reviews from './Reviews'
import CheckIcon from '@mui/icons-material/Check';
import AddProduct from './AddProduct';

const ProductSingleInfo = ({products}) => {
  const [showAll, setShowAll] = useState(false)
  const {brand, description, name, nutrition_facts =[''], reviews= [{rating: ""}], stock} = products
  
  return (
    <Container>
      <div>
        <h2>{name}</h2>
        <p className="product-brand">{brand}</p>
        <Reviews feedback={reviews}/>
      </div>
      <div className="fact-container">
        {nutrition_facts.map((fact, index) => {
          return (
            <div key={index} className="fact">
              <CheckIcon/>
              <p className="fun-facts">{fact}</p>
            </div>
          )
        })}
      </div>
      <div className="product-details">
        <h3>Details</h3>
        <p className="description">{`${showAll ? description : `${description?.substring(0, 100)}...` }`}</p>
        <button onClick={() => setShowAll(!showAll)} className="secondary-btn show-more-btn">{showAll ? "Show Less": "Show More"}</button>
      </div>
      {stock > 0 ? <AddProduct stock={stock} products={products}/> : <p className="no-stock">This product is currently out of stock.</p>}
    </Container>
  )
}

const Container = styled.div `
  text-align: center;
  margin: 0 1.5em;

  .fact-container {
    padding: 1.5em 0 2em 0;
    margin: 0 auto;
    width: fit-content;
  }

  .show-more-btn{ 
    margin-bottom: 1em;
  }

  .fact {
    display: flex;
    align-items: center;
  }

  .fun-facts {
    text-align: left;
    margin-left: 0.4em;
  }

  .product-brand{
    margin: 0.3em 0 0.3em 0;
  }

  .description{
    line-height: 1.5rem;
    margin: 0.5em 0;
  }

  .product-details {
    text-align: center;
  }

  .no-stock{
    color: red;
    margin-top: 1em;
  }
`

export default ProductSingleInfo