import React from 'react'
import styled from 'styled-components'
// import TrucksCategories from '../components/TrucksCategories'
import Navbar from '../components/Navbar'
import Truck from '../components/Truck'
import Trucks from '../components/Trucks'
import Footer from '../components/Footer'

const HomeContainer = styled.div`
  background-image: url("https://cdn.dribbble.com/users/187497/screenshots/3838836/tacotruck_drib.gif");
  background-size: cover, 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: blue;
  margin: 0 auto;
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