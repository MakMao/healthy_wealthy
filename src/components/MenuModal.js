import React from 'react'
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';
import { useProductsContext } from '../context/Products_context';

const MenuModal = () => {
  const {modal_open, closeModal} = useProductsContext()
  return (
    <Container >
      <aside className={`${modal_open ? "menu menu-open" : "menu"}`}>
        <div className="modal-header">
          <img src="https://i.imgur.com/v7fdlQS.png" alt="" />
          <button onClick={closeModal}>
            <CloseIcon className="icon"/>
          </button> 
        </div>
        <div className="underline"></div>
        <div className="modal-body"></div>
      </aside>
    </Container>
  )
}


const Container = styled.div `

.menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #EAEAEA;
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }
  .menu-open {
    transform: translate(0);
    z-index: 999;
  }

  img{
    width: 100px;
  }

  .modal-header {
    padding: 0.7em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    button{
      border: none;
      cursor: pointer;
    }
  }

  .icon {
    background-color: gray;
    border-radius: 50%;
    font-size: 1.7rem;
    padding: 2px;
  }


  .underline {
  width: 100%;
  height: 2px;
  opacity: 0.5;
  background: #888787;
  margin-left: auto;
  margin-right: auto;
}
`

export default MenuModal