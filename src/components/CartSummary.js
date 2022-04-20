import React, {useState} from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import {formatPrice} from '../utils/currency'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

const CartSummary = () => {
  const {total_amount, total_items, shipping_fee, total_discount} = useCartContext()
  const [opacity, setOpacity] = useState(0)

  return (
    <Container>
      <div className="summary-container">
        <div>
          <div className="flex">
            <h3>Overview</h3>
            <h3>{total_items} {total_items === 1 ? 'Product' : 'Products'}</h3>
          </div>
          <div className="underline"></div>
        </div>
        <div className="flex">
          <p>Subtotal</p>
          <p>{formatPrice(total_amount + total_discount)}</p>
        </div>
        <div className="shipping flex" >
        <p>Total discount</p>
            <p>{total_discount > 0 ? '- ' : ''}{formatPrice(total_discount)}</p>

        </div>
        <div>
          <div className="flex">
          <div className="shipping-div">Shipping Fee
              <QuestionMarkIcon className="q-icon"
              onMouseEnter={() => setOpacity(1)}
              onMouseLeave={() => setOpacity(0)}
            />
            <p className="modal" style={{opacity: opacity}} >No shipping fee above $100 spent</p>
          </div>
          <p>{(total_amount) < 10000 ? formatPrice(shipping_fee) : 'FREE'}</p>
          </div>
          <div className="underline"></div>
        </div>
        <div className="flex">
          <h2 className="total-amount">Total Amount</h2>
          <h2 className="total-amount">{total_amount < 10000 ? formatPrice(total_amount + shipping_fee ) : formatPrice(total_amount)}</h2>
        </div>
      </div>
    </Container>
  )
}

const Container = styled.div`
  margin-top: -1.2em;

  .summary-container{
    border: 1px solid var(--clr-cyan-dark);
    padding: 1em;
    margin-top: 2em;
  }
  
  @media (min-width: 768px){
    .total-amount {
      font-size: 1.2rem;
    }
  }

  h3 {
    padding-top: 0.5rem;
  }

  p {
    padding: 0.5em 0;
  }

  .shipping {
    display: flex;
    align-items: center;
  }

  .q-icon {
    font-size: 0.85rem;
    background-color: var(--clr-cyan-regular);
    border-radius: 50%;
    margin-left: 0.2em;
    cursor: pointer; 
  }

  .shipping-div {
    position: relative;
    display: flex;
    align-items: center;
  }

  .modal {
    position: absolute;
    top: -100%;
    background-color: var(--clr-cyan-dark);
    color: #fff;
    border-radius: 5px;
    padding: 0.2em;
    left: 73px;
    width: fit-content;
    white-space: nowrap;
    height: fit-content; 
    transition: 0.5s;
  }

  .modal::before {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    background-color: var(--clr-cyan-dark);
    top: 100%;
    left: 15px;
    transform: translateY(-50%) rotate(45deg);
  }

  .flex{
    display: flex;
    justify-content: space-between;
  }
`

export default CartSummary