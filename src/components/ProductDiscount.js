import React from 'react'
import styled from 'styled-components'

const ProductDiscount = ({img, price}) => {
  return (
    <Container>
      <img src={img} alt="" />
        {price.old && (
      <div className="discount">
        <h4>{(((price.new - price.old) / price.old ) * -100).toFixed()}% DISCOUNT!</h4>
      </div>
    )}
    </Container>
  )
}

const Container = styled.div `

.discount {
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 30px;
    background-color: var(--clr-cyan-dark);
    opacity: 0.7;
    h4 {
      font-size: 0.875rem;
      color: #fff;
      margin-bottom: 0;
      font-weight: 500;
    }
  }
`

export default ProductDiscount