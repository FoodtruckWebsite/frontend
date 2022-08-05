import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
    margin: 150px 0;
    padding: 30px;
    background-color: #c1e7f5;
    min-height: 100vw;

  img{
    margin-top: 10%;;
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 50%;
  }

  a{
    font-size: 2vw;
  }

  h1{
    font-size: 4vw;
  }
`

const AboutUs = ({  }) => {
    return (
      <StyledForm>
        <h1>About Us</h1>
        <a href="https://github.com/ogonz801"><h2>Osvaldo Gonzalez</h2></a>
        <a href="https://github.com/j4simon"><h2>Joy Simon</h2></a>
        <a href="https://github.com/jason-fine"><h2>Jason Fine - Scrum Master</h2></a>

        <img src="https://c.tenor.com/ADZQXBHBgDAAAAAM/best-team-teamwork.gif" alt="teamwork"/>
      </StyledForm>
          
    
    )
  }
  
  export default AboutUs

