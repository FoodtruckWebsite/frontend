import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const FooterContainer = styled.div`
    background-color : #FEEB75;
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
    position: fixed;
    bottom: 0;


`

const Footer = () => {
    return (
        <FooterContainer>
            
            <ul>
                
                <li><Link to='/aboutus'>About Us</Link> </li>
                <li><Link to='/'>Trademark</Link> </li>
  
                
            </ul>
            
        </FooterContainer>
    );
}

export default Footer