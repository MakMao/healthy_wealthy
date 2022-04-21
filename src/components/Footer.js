import React from 'react'
import styled from 'styled-components'

const Footer = () => {

  return (
    <Wrapper className="the-footer">
      <h5>&copy; {new Date().getFullYear()} <span>Protein Store</span> All rights reserved</h5>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: var(--clr-cyan-dark);
  color: var(--clr-cyan-regular);
  text-align: center;
  padding: 1.5em 1em;

  span {
    color: var(--clr-cyan-v-dark);
  }
`

export default Footer