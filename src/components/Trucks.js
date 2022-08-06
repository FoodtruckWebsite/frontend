
import Truck from './Truck'
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Params } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const TrucksContainer = styled.div`
    padding: 0;
    box-sizing: border-box;
    overflow: auto;
    margin: auto;
    background-image: url("https://cdn.dribbble.com/users/187497/screenshots/3838836/tacotruck_drib.gif");
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment:fixed;
    background-position: center;
    min-height: 100vh;
    background-color: #9DF0F3;

  li{
    margin-left: 30%;
  }
  a:link{
    color: #023020;
  }

  a:visited{
    color: darkred;
    background-color: #9DF0F3 .5;
  }

  span{
    font-size: 45px;
  }
`






const Trucks = ({trucks}) => {


  return (
    <TrucksContainer>
        {/* <h1>
            { trucks.map( ( trucks ) => {
                    return <Link to ={`/trucks/${trucks._id}`}>
                        <span>{trucks.name}</span><br/>
                        Category: {trucks.category}<br/>
                        Current Location: {trucks.location}<br/>
                        Rating: {trucks.rating}<br/>
                        Price Range: {trucks.priceRange}<br/>
                        <br/>
                    </Link>
                })}
        </h1> */}
                <ul>
            { trucks.map( ( trucks ) => {
                    return <Link to ={`/trucks/${trucks._id}`}>
                        <li><span>{trucks.name}</span><br/>
                        Category: {trucks.category}<br/>
                        Current Location: {trucks.location}<br/>
                        Rating: {trucks.rating}<br/>
                        Price Range: {trucks.priceRange}<br/>
                        <br/>
                        </li>
                    </Link>
                })}
        </ul>
    </TrucksContainer>
  )
}

export default Trucks
