import React from 'react'
import styled from 'styled-components'
import Trucks from '../components/Trucks'
import Navbar from '../components/Navbar'

const Home = ({trucks}) => {
    return (
    <div>
        <Navbar></Navbar>
        {/* <Trucks trucks ={trucks}/> */}
    </div>
    )
}

export default Home