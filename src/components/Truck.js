import React from 'react'

const Truck = ({ truck, index }) => {
    
  return (
    <div>
        <tr key={truck.id} >
            <td>{truck.name}</td>
            <td>{truck.catagory}</td>
            <td>{truck.tags}</td>
            <td>{truck.rating}</td>
            <td>{truck.menu}</td>
            <td>{truck.priceRange}</td>
            <td>{truck.location}</td>
            <td>{truck.logo}</td>
        </tr>
    </div>
  )
}

export default Truck