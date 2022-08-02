import React from 'react'
import styled from 'styled-components'
// import TrucksCategories from '../components/TrucksCategories'
import Navbar from '../components/Navbar'
import Truck from '../components/Truck'
import Trucks from '../components/Trucks'
import Footer from '../components/Footer'

const Home = ({trucks}) => {
    return (
    <div>
        <Navbar></Navbar>
        <Trucks trucks ={trucks}/>
        {/* <Truck></Truck> */}
        <Footer></Footer>

    </div>
    )
}

export default Home