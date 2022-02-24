import React from 'react'
import CardContainer from '../components/CardContainer'
import Filters from '../components/Filters'

const Home = () => {
  return (
    <div className="container">
      <CardContainer/>
      <Filters/>
    </div>
  )
}

export default Home