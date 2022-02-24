import React, { useEffect, useState } from 'react'
import data from '../data/data'
import styled from 'styled-components'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { position } from 'dom-helpers';


const CardContainer = () => {
  const [index, setIndex] = useState(0)
  const [info, setInfo] = useState(data)

  const handleChange = (val) =>{
    const length = data.length - 1
    if(val === 'inc'){
      setIndex((val) => val + 1 > length ? val = 0 : val + 1)
    }
    if(val === 'dec'){
      setIndex((val) => val - 1 < 0 ? val = length : val - 1)
    }
  }

  // useEffect(() => {
  //   let change = setInterval(() => {
  //     handleChange('inc')
  //   }, 1000);
  //     return () => {
  //       clearInterval(change)
  //     }
  // },[index])

  return (
    <Card >
      {info.map((item, cardIndex) => { 

        let place = 'left'
        if(cardIndex === index) {
          place = 'center'
        }
        if(cardIndex === index - 1 || (index === 0 && cardIndex === data.length - 1)){
          place ='right'
        }

        const {id, desc, text} = item
       return (
        <article key={id} className={place}>
          <h3>{desc}</h3>
          <p>{text}</p>
          <button className="arrow arrow-left" onClick={() => handleChange('dec')}>
          <ArrowBackIosNewIcon/>
          </button>
          <button className="arrow arrow-right" onClick={() => handleChange('inc')}>
          <ArrowForwardIosIcon/>
          </button>
      </article>
       )
      })}
  </Card>
  )
}

const Card = styled.section `
  position: relative;
  width: 80vw;
  height: 350px;
  margin: 0 auto;
  display: flex;
  border: 2px solid red;
  
  article{
    width: 450px;
    padding: 1em;
    opacity: 0;
    height: 300px;
    border: 2px solid gray;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    transition: var(--transition);
  }

  .left {
    transform: translateX(-150%);
  }

  .center {
    transform: translateX(-50%);
    z-index: 10;
    opacity: 1;
  }

  .right {
    transform: translateX(50%);
  }

  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%)
  }

  .arrow-left {
    left: -12px;
  }

  .arrow-right {
    right: -12px;
  }

` 
export default CardContainer