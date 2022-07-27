import React from 'react'
import styled from 'styled-components'
import FoodCategories from '../components/navbar'

const Home = ({foodCategories}) => {
    return (
    <div>
        <FoodCategories foodCategories={foodCategories}/>
    </div>
    )
}

export default Home