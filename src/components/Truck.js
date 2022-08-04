import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import { AuthContext} from '../services/AuthContext'
import { Params, useParams, useNavigate, Link } from 'react-router-dom'
import { alignPropType } from 'react-bootstrap/esm/types'
import styled from 'styled-components'

const Button = styled.button`
`




const Truck = ({trucks}) => {

  const {user, setUser, isAuthenticated, setIsAunthenticated} = useContext(AuthContext)
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

// console.log(truckId)
console.log(truck.menu)
// const newJoin = truck.menu.join()
// console.log(newJoin)
  return (
    <div>
      <h1>
        {truck.name} 
        {/* {truck.menu[0].itemName}
        {truck.menu[1].itemName} */}
        {isAuthenticated === true && user?.role === 'owner' ? <Button onClick={() => deleteTruck(truck._id)}>Delete</Button> : null}
        {isAuthenticated === true && user?.role === 'owner' ? <Link to='edit'><Button>Update Info</Button></Link> : null}
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