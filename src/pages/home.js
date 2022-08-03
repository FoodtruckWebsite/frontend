import React from 'react'
import styled from 'styled-components'
import TrucksCategories from '../components/TrucksCategories'
import Navbar from '../components/Navbar'
import Trucks from '../components/Trucks'

const Home = ({trucks}) => {
    return (
    <div>
        <Trucks trucks ={trucks}/>
    </div>
    )
}

export default Home