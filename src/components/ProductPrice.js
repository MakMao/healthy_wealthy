import React from 'react'
import {formatPrice} from '../utils/currency'
import styled from 'styled-components'

const ProductPrice = ({price}) => {
  return (
    <Container>
      {price?.old ? 
      <div>
        <h4 className="old">{formatPrice(price?.old)}</h4>
        <h4 className="new">{formatPrice(price?.new)}</h4>
      </div> 
      : <div>
        <h4 className="new">{formatPrice(price?.new)}</h4>
      </div>}
    </Container>
  )
}

const Container = styled.div `
  div {
    display: flex;
    justify-content: center;
    margin-top: 1em;
    gap: 10px;
  }

  .old{
    text-decoration: line-through;
    color: gray
  }

`

export default ProductPrice