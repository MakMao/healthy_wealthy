import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

const Footer = () => {
  const [sizePercentage, setSizePercentage] = useState(0)
  const [sizeVH, setSizeVH] = useState(0)

  const chooseHeight = window.innerHeight + 59 > document.body.scrollHeight ? true : false

  console.log(window.innerHeight);
  console.log(document.body.scrollHeight);
  console.log(chooseHeight);

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