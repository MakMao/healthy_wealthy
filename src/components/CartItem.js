import React from 'react'
import { useCartContext } from '../context/cart_context'
import {Link, useParams} from 'react-router-dom'
import {formatPrice} from '../utils/currency'
import AmountButtons from './AmountButtons'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import styled from 'styled-components'


const CartItem = ({name, image, id, price, amount, price_old, flavour}) => {
  const {toggleAmount, delCartItem} = useCartContext()
  
  const increase = () => {
    toggleAmount(id, 'inc')
  }
  const decrease = () => {
    toggleAmount(id, 'dec')
  }


  return (
    <Container >
      <div className="cart-item">
        <div>
          <img src={image} alt="" />
        </div>
          <div className="two">
            <h5>{name}</h5>
            <AmountButtons amount={amount} increase={increase} decrease={decrease} />
            {flavour !== 'all' && <h5 className="flavour">{flavour}</h5>}
          </div>
          <div className="three">
            <CloseRoundedIcon onClick={() => delCartItem(id)} className="del-icon"/>
            <div className="price-container">
              {price_old && <h4 className="old-price">{formatPrice(price_old * amount)}</h4>}
              <h4>{formatPrice(price * amount)}</h4>
            </div>
          </div>
      </div>
      <div className="underline"></div>
  </Container>
  )
}

const Container = styled.div`
    padding: 1em 0;

  .cart-item{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .flavour {
    margin-top: 0.7em;
    text-transform: capitalize;
  }

  .two {
    place-self: start center;
    text-align: center;
    h5 {
      margin-bottom: 0.7em;
    }
  }

  .three{
    place-self: stretch end;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
  }

  .old-price{
    margin-right: 0.5em;
    color: gray;
    opacity: 0.6;
    text-decoration: line-through;
  }

  .price-container{ 
    display: flex;
  }

  .del-icon {
    transition: 0.3s;
    background-color: var(--clr-cyan-regular);
    border-radius: 50%;
    cursor: pointer;
  }

  .del-icon:hover {
    transform: scale(1.15);
  }

  img {
      max-width: 90px;
      height: 100px;
      margin-right: 1.5em ;
      object-fit: contain;
    }

`

export default CartItem