import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const NavBarContainer = styled.div`
    background-color : #FEEB75;
    width : 100%;
    text-decoration : underline;
    padding: 1px;


    ul{

       text-decoration: none;
        display: flex;
        justify-content: space-evenly;
        margin: 0 auto;

    }
    li{
        list-style: none;
        padding: 10% 0;
    }

    img{
        padding: 0;
        max-width: 30%;
    }


`

const Navbar = () => {
    return (
        <NavBarContainer>
            
            <ul>
                <img src="https://i.imgur.com/ONETT5e.png" alt="logo"></img>
                <li><Link to='/login'>Login</Link> </li>
                <li><Link to='/'>Noms On Wheels</Link> </li>
                <li><Link to='/location'>Change Location</Link> </li>
                <li><Link to='/order'>Order Now</Link> </li>
                
            </ul>
            
        </NavBarContainer>
    );
}

export default Navbar