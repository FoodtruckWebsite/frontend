import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  img{
      margin-top: 20%;;
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 50%;
  }
  p{
    font-size: 3vw;
    text-align: center;
  }

  a{
    font-size: 2vw;
  }
`

const Trademark = ({  }) => {
    return (
      <StyledForm>
        <img src="https://recruiting.cdn.greenhouse.io/external_greenhouse_job_boards/logos/000/000/170/original/GALogoForGreenhouse.png?1448035888" alt="GA Logo"/>
        <p>Created in 2022 by 
        <a href="https://github.com/ogonz801"><h2>Osvaldo Gonzalez</h2></a>
        <a href="https://github.com/j4simon"><h2>Joy Simon</h2></a>
        <a href="https://github.com/jason-fine"><h2>Jason Fine</h2></a>


          </p>
      </StyledForm>
          
    
    )
  }
  
  export default Trademark

