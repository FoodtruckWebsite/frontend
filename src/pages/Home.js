import React from 'react'
import styled from 'styled-components'
// import TrucksCategories from '../components/TrucksCategories'
import Navbar from '../components/Navbar'
import Truck from '../components/Truck'
import Trucks from '../components/Trucks'
import Footer from '../components/Footer'

const HomeContainer = styled.div`
`


const Home = ({trucks}) => {
    return (
    <HomeContainer>
        <Trucks trucks={trucks}/>
       

    </HomeContainer>
    )
}

export default Home