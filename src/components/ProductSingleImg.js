import React, { useState } from 'react'
import styled from 'styled-components'

const ProductSingleImg = ({images= [{url: ''}]}) => {
  const [main, setMain] = useState([0])

  const help = {
    1: "one",
    2: "two",
    3: "three"
  }

  return (
    <Container>
      <div className="main-images">
        {images.map((image, index) => {
          return (
            <div key={index} className={`main-img ${help[index]}`}>
                <img className="def-img" 
                  src={image} alt="" 
                  style={{transform: `translateX(-${main}00%)`}} />
            </div>
          ) 
        })}
      </div>
      {images.length > 1 && <div className="all-images" style={{display: 'grid', gridTemplateColumns: `repeat(${images.length}, 80px)` }}>
        {images.map((image, index) => {
          return (
            <div key={index}
              onClick={() => images[setMain(index)]}  
              className={image === images[main] ? "single-img active" : 'single-img'}>
              <img key={index}
                src={image} 
                alt="product's avatar" />   
            </div>
              ) 
            })}
      </div>}
    </Container>
  )
}
const Container = styled.div `
  margin-bottom: 4em;
  @media (min-width: 768px){
    width: 100%;
    height: auto;
    object-fit: contain;
    border: 2px solid var(--clr-cyan-regular);
    display: block;
  }

  .main-images {
    margin: 0 auto;
    width: 250px; 
    height: 300px;
    object-fit: contain;
    position: relative;
    overflow: hidden;
  }

@media (min-width: 768px){
  .main-images {
      width: 100%;
      height: 55vw;
      max-height: 550px;
    }
  }
  
  .main-img{
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    top: 0;
    left: 0;
    object-fit: contain;
  }
  
  .def-img{
    padding: 2em 3em;
    transition: 0.3s all;
    max-height: 500px;
    width: 100%;
    object-fit: contain;
  }


  .one {
    transform: translateX(100%) ;
    transition: all 1s;

  }
  .two {
    transform: translateX(200%) ;
    transition: all 1s;

  }
  .three {
    transform: translateX(300%) ;
    transition: all 1s;

  }

  .all-images {
    margin: 0 auto;
    grid-gap: 5px;
    height: 200px;
    padding: 2em 0;
    justify-content: center;
    width: 350px;
    place-items: center;
    .single-img.active{
      border: 2px solid var(--clr-cyan-dark);
      opacity: 1;
    }
    .single-img{
      height: 150px;
      border: 2px solid var(--clr-cyan-regular);
      opacity: 0.5;
      display: grid;
      place-items: center;
      cursor: pointer;
    }
  }
`


export default ProductSingleImg