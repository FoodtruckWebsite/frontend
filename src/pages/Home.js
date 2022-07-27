import React from 'react'
import Trucks from '../components/Trucks'

const Home = ({ trucks }) => {
  return (
    <div>
        <Trucks trucks={trucks}/>
    </div>
  )
}

export default Home