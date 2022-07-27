import React from 'react'
import styled from 'styled-components'

const TrucksContainer = styled.div`
    background-color : yellow;
    width : 100%;
    text-decoration : underline;


`

const TrucksCategories = ({trucks}) => {
    return (
        <div>
            {trucks.map((truck) => {
                return(
                    <div>
                        <h1>{truck.catagory}</h1>
                    </div>
                )
            })}

            Truck
        </div>
    );
}

export default TrucksCategories