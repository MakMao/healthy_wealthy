import React, {useState} from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';
import AmountButtons from './AmountButtons'
import { useFilterContext } from '../context/Filters_context';
import ProductPrice from './ProductPrice';


const AddProduct = ({products}) => {
  const [amount, setAmount] = useState(1)
  const {addToCart} = useCartContext()
  const {id, price, stock, flavours} = products

  const {updateFilters, filters: {flavour}} = useFilterContext()

  const increase = () => {
    setAmount((old) => {
      let tempAmount = old + 1
      if(tempAmount >  stock) {
        tempAmount = stock
      }
      return tempAmount
    })
  }

  const decrease = () => {
    setAmount((old) => { return old > 1 ? old - 1 : 1})
  }

  return (
    <Container>
      {flavours && flavour === 'all' ? <p className="flavour-text">Please select a flavour</p> : null}
      <div className="flavours-container">
        {flavours?.map((item,i ) => {
          return (
            <button 
              onClick={updateFilters}
              name="flavour" 
              key={i} 
              className={`${flavour === item ? 'tertiary-btn active' : 'tertiary-btn'}` }>
              {item}
            </button>
          )
        })}
      </div>
      <ProductPrice price={price}/>
      <div className="amount-container">
        <AmountButtons amount={amount} increase={increase} decrease={decrease}/>
      </div>
      {(flavour !== 'all' || flavours === undefined) && <Link to='/cart' className="btn" onClick={() => addToCart(id, amount, products, flavour)}>add to cart</Link>}
    </Container>
  )
}

const Container = styled.div `
  margin: 1em 0 ;

.amount-container{
  display: flex;
  justify-content: center;
  margin: 1em 0 1.3em 0;
  height: 33px;
  align-items: center;
}

.flavours-container{ 
  display: flex;
  justify-content: center;
  column-gap: 1em;
}

.flavour-text {
  margin: 1em 0;
  font-weight: 700;
}

.active{
  border-color: transparent;
  padding-bottom: 0.3em;
  border-bottom-color: var(--clr-cyan-dark);
}

`
export default AddProduct