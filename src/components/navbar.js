import React from 'react'
import styled from 'styled-components'

const NavBarContainer = styled.div`
    background-color : yellow;
    width : 100%;
    text-decoration : underline;


`

const FoodCategories = ({foodCategories}) => {
    return (
        <div>
            
            {foodCategories.map (foodCategory => {
                return (
                    <NavBarContainer>
                        <h1>{foodCategory.name}</h1>
                    </NavBarContainer>
                )
            })}
        </div>
    );
}

export default FoodCategories