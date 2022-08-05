import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const FooterContainer = styled.div`
    background-color : #FFFDD0;
    width : 100%;
    padding: 1px;
    ul{
        display: flex;
        justify-content: space-evenly;
        text-decoration: none;
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
                <li>MergeConflict &trade;</li>
                
  
                
            </ul>
            
        </FooterContainer>
    );
}

export default Footer