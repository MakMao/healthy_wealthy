import React, {useState} from 'react'
import styled from 'styled-components'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const AddProduct = ({stock}) => {
  const [amount, setAmount] = useState(1)
  const [init, setInit] = useState(true)
  
  const handleChange = (val) => {
    if(val === 'inc'){
      return amount < stock ? setAmount(amount + 1) : setAmount(stock)
    }if(val === 'dec'){
      return (amount - 1) < 1 ? setInit(!init) : setAmount(amount - 1)
    }
  }

  if(init){
    return (
    <Container className="btn" onClick={() => setInit(!init)}>
       <p className="init">Add</p>
    </Container>
    )
  }
  
  return (
    <Container className="btn">
      <RemoveIcon onClick={() => handleChange('dec')} />
       <p className="init">{amount}</p>
      <AddIcon onClick={() => handleChange('inc')} />
    </Container>
  )
}

const Container = styled.div `
  display: flex;
  justify-content: space-between;
  height: 33px;
  align-items: center;

  .init{
    text-align: center;
    margin: 0 auto;
  }

`
export default AddProduct