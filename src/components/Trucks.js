
import Truck from './Truck'
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Params } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const TrucksContainer = styled.div`
  background-image: "https://i.imgur.com/tx4DmXl.png";

  h1{
    text-align: center;
    text-decoration: none;
    padding: 0%;
  }

  h2{
    text-decoration: none;
    padding: 0%;
  }
`






const Trucks = (props) => {


    const [trucks, setTrucks] = useState([])



    useEffect(() => {
    fetch(`http://localhost:3000/truck`)
    .then(res => res.json())
    .then(data => setTrucks(data))
    },[])
    console.log(trucks)

  return (
    <TrucksContainer>
        <h1>
            { trucks.map( ( trucks ) => {
                    return <Link to ={`/trucks/${trucks._id}`}>
                        <h2>{trucks.name}</h2>
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
