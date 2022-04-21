import React, {useState} from 'react'
import {questions} from '../utils/faq-data'
import styled from 'styled-components'
import FAQSingleQuestion from '../components/FAQSingleQuestion';
import Hero from '../components/Hero'

const FAQ = () => {
  return (
    <Container>
      <div className="faq-wrapper">
        <Hero title="FAQ"/>
          <div className="faq-container">
            <h1>FAQ</h1>
            <section className="faq-container">
              {questions.map((item) => {
                return (
                  <FAQSingleQuestion key={item.id} {...item}></FAQSingleQuestion>
                )
              })}
            </section>
          </div>
      </div>
      <div className="the-footer">
        <h5>&copy; {new Date().getFullYear()} <span className="footer-span">Protein Store</span> All rights reserved</h5>
      </div>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 10em;

  .faq-wrapper {
    margin: 0 auto;
    margin-bottom: 5em;
    max-width: 960px;
    min-height: calc(100vh - 198px);
  }

  .faq-container {
    text-align: center;
  }

  h1{
    margin: 0.5em 0;
  }

`

export default FAQ