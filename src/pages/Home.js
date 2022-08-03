import React from 'react'
import styled from 'styled-components'
// import TrucksCategories from '../components/TrucksCategories'
import Navbar from '../components/Navbar'
import Truck from '../components/Truck'
import Trucks from '../components/Trucks'
import Footer from '../components/Footer'

const HomeContainer = styled.div`
    background-image: url("https://i.imgur.com/tx4DmXl.png");
    background-repeat: no-repeat;
`


const Home = ({trucks}) => {
    return (
    <HomeContainer>
        <Navbar/>
        <Trucks trucks={trucks}/>
        <Footer/>

    </HomeContainer>
    )
}

export default Home