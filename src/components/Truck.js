import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import { AuthContext} from '../services/AuthContext'
import { Params, useParams, useNavigate, Link } from 'react-router-dom'
import { alignPropType } from 'react-bootstrap/esm/types'
import styled from 'styled-components'

const Button = styled.button`
  margin-right: 60px;
  margin-left: 10px;
`

const TruckContainer = styled.div`
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

  h1{

    font-weight: bold;
    margin-left: 30%;
    padding-top: 30px;

  }

  h2{
    font-size: 20px;
    font-weight: normal;
  }

span{
  padding: 0 15px 0 15px;
  color: #FFFDD0;
  background-color: darkred;
}
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
    <TruckContainer>
      <h1>
        <span>{truck.name}</span>
        <h2>
          Category {truck.catagory}<br/>
          Rating {truck.rating}<br/>
          Price Range {truck.priceRange}<br/>
          Location {truck.location}
        </h2>
         
        {/* {truck.menu[0].itemName}
        {truck.menu[1].itemName} */}
        {isAuthenticated === true && user?.role === 'owner' ? <Button onClick={() => deleteTruck(truck._id)}>Delete</Button> : null}
        {isAuthenticated === true && user?.role === 'owner' ? <Link to='edit'><Button>Update Info</Button></Link> : null}
      </h1>
        
    </TruckContainer>
  )
}

export default Truck

      //  {trucks.id} >
      //       {trucks.name}
      //       {truck.catagory}
      //       {truck.tags}
      //       {truck.rating}
      //       {truck.menu}
      //       {truck.priceRange}
      //       {truck.location}
      //       {truck.logo}
 