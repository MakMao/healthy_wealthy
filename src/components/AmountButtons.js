import React from 'react'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import styled from 'styled-components'

const AmountButtons = ({amount, increase, decrease}) => {
  return (
    <Container>
      <RemoveIcon onClick={decrease} className="icon"/>
      <h4>{amount}</h4>
      <AddIcon onClick={increase} className="icon"/>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h4{
    padding: 0.35em 1em;
    border-top: 1px solid var(--clr-cyan-regular);
    border-bottom: 1px solid var(--clr-cyan-regular);
  }

  .icon {
    background-color: var(--clr-cyan-regular);
    font-size: 2rem;
    transition: var(--transition-fast);
    padding: 0.2em;
    cursor: pointer;
  }

  .icon:hover{
    background-color: var(--clr-cyan-dark);
    color: #fff;
  }
`

export default AmountButtons