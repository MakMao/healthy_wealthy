import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/Filters_context'
import Filters from './Filters'

const SideBar = () => {
  const {modal_open,  closeModal} = useFilterContext()

  return (
    <Container>
      <div className={modal_open ? "modal open" : "modal"}>
        <Filters />
        <button className="btn close-btn" onClick={closeModal}>APPLY FILTERS</button>
      </div>
    </Container>
  )
}

const Container = styled.div`
  margin: 1em;

.modal{ 
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  transform: translateX(-100%);
  background-color: var(--clr-cyan-light);
  display: grid;
  grid-template-rows: auto 1fr auto;
  row-gap: 1rem;
  opacity: 1; 
  transition: 0.3s;
  padding: 0 1em; 
  z-index: 3;
}

.close-btn {
  height: fit-content;
}

.open {
  transform: translateX(0);
  transition: 0.3s;
}
`

export default SideBar