import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Error = () => {
  return (
    <Container>
      <h2>The page you were looking for does not exist</h2>
      <h3>Please check again</h3>
      <Link to="/">
      <button className="btn">Back Home</button>
      </Link>
    </Container>
  )
}

const Container = styled.div`
  width: fit-content;
  padding-top: 2em;
  margin: 0 auto;
  text-align: center;

  h2 {
    margin-bottom: 0.5em;
  }

  h3 {
    margin-bottom: 1em;
  }

`

export default Error