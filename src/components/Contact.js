import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  return (
    <Container className="section">
     <h2>receive 10% off your first order with our newsletter</h2>
     <p>Stay up to date with recent news, advice and weekly offers</p>
     <form 
        className="form-control" 
        action="https://formspree.io/f/xjvlrgwb"
        method="POST"
        >
       <input 
        type="text" 
        placeholder="Enter your email..."
        name= '_replyto'
        />
       <button>Sign Up</button>
     </form>
    </Container>
  )
}

const Container = styled.div `
  text-align: center;

  input{
    box-shadow: 0 0 10px var(--clr-cyan-regular);
    border-top-right-radius: 0;
    width: 65vw;
    max-width: 600px;
    border-bottom-right-radius: 0;
  }

  button{
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

`

export default Contact