import React, {useState, useEffect} from 'react'
import data from '../data/data'
import styled from 'styled-components'

const CardContainer = () => {
  const [index, setIndex] = useState(0)
  const [info, setInfo] = useState(data)

  const handleSlider = (val) =>{
    const length = data.length - 1
    if(val === 'inc'){
      setIndex((val) => val + 1 > length ? val = 0 : val + 1)
    }
    if(val === 'dec'){
      setIndex((val) => val - 1 < 0 ? val = length : val - 1)
    }
  }

  useEffect(() => {
    let change = setInterval(() => {
      handleSlider('inc')
    }, 1500);
      return () => {
        clearInterval(change)
      }
  },[index])

  return (
    <Container className="section slider-container">
      {info.map((item, cardIndex) => { 

        let place = 'left'
        if(cardIndex === index) {
          place = 'center'
        }
        if(cardIndex === index - 1 || (index === 0 && cardIndex === data.length - 1)){
          place ='right'
        }
        const {id, title, img} = item
       return (
        <article key={id} className={place}>
            <h5 className="slider-title">{title}</h5>
            <img src={img} alt="logo" />
        </article>)
      })}
  </Container>
  )
}

const Container = styled.section `
  position: relative;
  overflow: hidden;
  width: 90vw;
  height: 30px;
  margin: 0 auto;
  display: grid;
  place-items: center;
  
  article{
    padding: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    position: absolute;
    left: 50%;
    height: 100%;
    width: 100%;
    transform: translateX(-50%);
    transition: var(--transition);
    img{  
      width: 30px;
      margin-left: 0.5em;
    }
  }

  .slider-title{
    font-weight: 600;
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


` 
export default CardContainer