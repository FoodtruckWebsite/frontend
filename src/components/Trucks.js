
import Truck from './Truck'
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Params } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const TrucksContainer = styled.div`
  text-shadow: 2px 3px #354A21;
  a:link{
    text-decoration: none;
    color: blue;
  }

  a:visited{
    color: green;
  }

  link{
    text-align: center;
    text-decoration: none;
    padding: 0%;
    border-width: 100%;
    border-color: yellow;
  }

  h2{
    text-decoration: none;
    padding: 0%;
  }
`






const Trucks = ({trucks}) => {


  return (
    <TrucksContainer>
        <h1>
            { trucks.map( ( trucks ) => {
                    return <Link to ={`/trucks/${trucks._id}`}>
                        {trucks.name}
                        Category: {trucks.category}<br/>
                        Current Location: {trucks.location}<br/>
                        Rating: {trucks.rating}<br/>
                        Price Range: {trucks.priceRange}<br/>
                        <br/>
                    </Link>
                })}
        </h1>
    </TrucksContainer>
  )
}

export default Trucks
