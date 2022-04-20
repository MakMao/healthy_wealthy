import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import styled from 'styled-components'

const FAQSingleQuestion = ({title, info}) => {
  const [showQ, setShowQ] = useState(false)

  return (
      <Article>
        <div className="article">
          <header onClick={() => setShowQ(!showQ)}>
            <h3 onClick={() => setShowQ(!showQ)}>{title}</h3>
            <button >{showQ ? <RemoveIcon/> : <AddIcon/>}</button>
          </header>
          <p className={`${showQ ? 'info do-show' : 'info'}`}>{info}</p>
        </div>
      </Article>
  )
}

const Article = styled.article `
  display: flex;
  justify-content: center;

  header {
    cursor: pointer;
  }
  
  .article{
    background: #fff;
    box-shadow: 0 0 3px var(--clr-cyan-dark);
    border-radius: 5px;
    padding: 1em;
    width: 95%;
    margin-top: 1em;
  p{
    line-height: 24px;
    }
  }
  
  header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
      margin: 0.5em 0;
      text-align: left;
    }
  }

  button {
    background: transparent;
    border: 0;
  }

  .info{ 
    text-align: left;
    max-height: 0; 
    opacity: 0; 
    transition: 0.3s;
  }
  .do-show{
    max-height: 1000px;
    opacity: 1; 
  }
`
export default FAQSingleQuestion