import React from 'react'
import Truck from './Truck'

const Trucks = (props) => {
    let { trucks } = props
  return (
    <div>
        <h1>Trucks</h1>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Category</th>
                    <th>tags</th>
                    <th>Rating</th>
                    <th>Price Range</th>
                    <th>Location</th>
                </tr>
            </thead>
            <tbody>
                { trucks.map( ( trucks ) => {
                    return <Truck key={trucks._id}/>
                })}
            </tbody>
        </table>
    </div>
  )
}

export default Trucks
