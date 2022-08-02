import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Params, useParams, useNavigate, Link } from 'react-router-dom'
import { alignPropType } from 'react-bootstrap/esm/types'
import styled from 'styled-components'

const Button = styled.button`
`




const Truck = ({trucks}) => {

  const navigate = useNavigate();

  let {truckId} = useParams();
  const [truck, setTrucks] = useState([])

  const updateTruckState = (id) => {
    setTrucks(trucks.filter(truck => truck._id !== truckId))
  }
  const deleteTruck = (truckId) => {
    axios.delete(`http://localhost:3000/truck/${truckId}`)
    .then(res => {
      updateTruckState(truckId)
      navigate('/')
    })
  }

  useEffect(() => {
    fetch(`http://localhost:3000/truck/${truckId}`)
    .then(res => res.json())
    .then(data => setTrucks(data))
    },[])

console.log(truckId)
  return (
    <div>
      <h1>
        {truck.name}
        <Button onClick={() => deleteTruck(truck._id)}>Delete</Button>
      </h1>
        
    </div>
  )
}

export default Truck

        // <tr key={trucks.id} >
        //     <td>{trucks.name}</td>
        //     <td>{trucks.catagory}</td>
        //     <td>{trucks.tags}</td>
        //     <td>{trucks.rating}</td>
        //     <td>{trucks.menu}</td>
        //     <td>{trucks.priceRange}</td>
        //     <td>{trucks.location}</td>
        //     <td>{trucks.logo}</td>
        // </tr>