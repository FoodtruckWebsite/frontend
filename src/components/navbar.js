import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const NavBarContainer = styled.div`
    background-color : yellow;
    width : 100%;
    text-decoration : underline;
    padding: 1px;
    ul{
        display: flex;
        justify-content: space-evenly;
    }
    li{
        list-style: none;
    }


`

const Navbar = () => {
    return (
        <NavBarContainer>
            
            <ul>
                
                <li><Link to='/login'>Login</Link> </li>
                <li><Link to='/'>Noms On Wheels</Link> </li>
                <img src="https://imgur.com/a/FnUD8mc" alt="logo"></img>
                <li><Link to='/location'>Change Location</Link> </li>
                <li><Link to='/order'>Order Now</Link> </li>
                
            </ul>
            
        </NavBarContainer>
    );
}

export default Navbar