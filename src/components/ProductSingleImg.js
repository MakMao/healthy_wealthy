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
          <div className="main-images"  >
            {images.map((image, index) => {
              return (
                <div key={index} className={`main-img ${help[index]}`}>
                    <img className="theimg" 
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
                  alt="" />   
              </div>
                ) 
              })}
        </div>}

    </Container>
  )
}
const Container = styled.div `
@media (min-width: 768px){
  width: 100%;
  height: auto;
  object-fit: contain;
  display: block;
  border: 2px solid green;
}

  .main-images {
    margin: 0 auto;
    /* transition: 1s all; */
    //
    width: 250px; 
    height: 300px;
    object-fit: contain;
    position: relative;
    overflow: hidden;
    border: 5px solid brown;
  }

  @media (min-width: 768px){
    .main-images {
      width: 100%;
      /* background-color: yellow; */
      height: 55vw;
      max-height: 550px;
    }
  }
  
  .main-img{
    position: absolute;
    border: 2px solid green;
    //
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    top: 0;
    left: 0;
    object-fit: contain;
    /* transition: all 1s; */
  }
  
  .theimg{
    padding: 2em 3em;
    transition: 1s all;
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
    /* margin-top: 15em;  */
    height: 200px;
    padding: 2em 0;
    justify-content: center;
    width: 350px;
    place-items: center;
    background-color: pink;
    .single-img.active{
      border: 5px solid yellow;
    }
    .single-img{
      height: 150px;
      border: 2px solid red;
      display: grid;
      place-items: center;
      cursor: pointer;
    }
  }
`


export default ProductSingleImg