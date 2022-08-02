
import Truck from './Truck'
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Params } from 'react-router-dom'
import { useParams } from 'react-router-dom'







const Trucks = (props) => {


    const [trucks, setTrucks] = useState([])



    useEffect(() => {
    fetch(`http://localhost:3000/truck`)
    .then(res => res.json())
    .then(data => setTrucks(data))
    },[])
    console.log(trucks)

  return (
    <div>
        <h1>
            { trucks.map( ( trucks ) => {
                    return <Link to ={`/trucks/${trucks._id}`}>
                        {trucks.name}
                        {trucks.category}<br/>
                        {trucks.location}<br/>
                        {trucks.rating}<br/>
                        {trucks.priceRange}
                    </Link>
                })}
        </h1>
    </div>
  )
}

export default Trucks
