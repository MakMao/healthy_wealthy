import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import styled from 'styled-components'

const Reviews = ({feedback}) => {
  const {rating, reviews} = feedback
  const stars = Array.from({length: 5}, (_,i) => {
    return (
      <span key={i}>
        {rating >= i + 1 ? <StarIcon/> : rating >= i + 0.5 ? <StarHalfIcon/> : <StarBorderIcon/>}
      </span>
    ) 
    })

  return (
    <Wrapper>
     <div>{stars}</div>
     <span>({reviews})</span>
    </Wrapper>
  )
}

export default Reviews

const Wrapper = styled.div `
  display: flex;
  justify-content: center;

  svg {
    font-size: 1.2rem;
    color: var(--clr-cyan-dark);
  }


`