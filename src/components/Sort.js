import React from 'react'
import styled from 'styled-components'
import { useProductsContext } from '../context/Products_context'

const Sort = () => {
  const {sort, updateSort} = useProductsContext()
  return (
    <Container>
      <h4>length</h4>
      <form>
        <label htmlFor="sort">sort by: </label>
        <select name="sort" id="sort" value={sort} onChange={updateSort}>
          <option value="price-lowest">Price: low to high</option>
          <option value="price-highest">Price: high to low</option>
        </select>
      </form>
    </Container>
  )
}

const Container = styled.div `
  display: flex;
  justify-content: space-between;
`

export default Sort