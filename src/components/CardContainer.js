import React, {useState } from 'react'
import data from '../data/data'
import styled from 'styled-components'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

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
    <Container>
        <div className="section slider-container">
          {info.map((item, cardIndex) => {
            let place = 'left'
            if(cardIndex === index) {
              place = 'center'
            }
            if(cardIndex === index - 1 || (index === 0 && cardIndex === data.length - 1)){
              place ='right'
            }
            const {id, title, desc, img} = item
           return (
            <article key={id} className={place}>
              <div className="one">
                <h3 className="card-title">{title}</h3>
                <p>{desc}</p>
              </div>
              <div className="two">
                <img src={img} alt="" />
              </div>
              <button className="arrow arrow-left" onClick={() => handleSlider('dec')}>
              <ArrowBackIosNewIcon/>
              </button>
              <button className="arrow arrow-right" onClick={() => handleSlider('inc')}>
              <ArrowForwardIosIcon/>
              </button>
          </article>
           )
          })}
        </div>
  </Container>
  )
}

const Container = styled.section `
  margin: 3em 0;

  .slider-container{
    position: relative;
    overflow: hidden;
    max-width: 500px;
    height: 200px;
    display: flex;
    justify-content: center;
    @media (min-width: 768px){ 
      display: none;
    }
  }

  .card-title{
    margin-bottom: 0.5em;
  }
  
  article{
    padding: 2em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 7px;
    opacity: 0;
    height: auto;
    border: 2px solid var(--clr-cyan-regular);
    position: absolute;
    left: 50%;
    height: 100%;
    width: 90%;
    transform: translateX(-50%);
    transition: var(--transition);
    img{  
      width: 100px;
    }
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
    color: var(--clr-cyan-dark);
    height: 35px;
    z-index: 51;
    background: var(--clr-cyan-v-light);
    width: 35px;
    transform: translateY(-50%);
    border-radius: 50%;
    border: 2px solid var(--clr-cyan-regular);
    padding: 0.2em;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9;
  }

   .arrow-left {
    left: -18px;
    padding-right: 0.3em;
  }

  .arrow-right {
    right: -18px;
    padding-left: 0.3em;
  } 
` 
export default CardContainer