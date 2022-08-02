import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import AuthService from '../services/AuthService'
import { AuthContext } from '../services/AuthContext'
import { useNavigate } from 'react-router-dom'


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

    const navigate = useNavigate()

    const {user, setUser, isAuthenticated, setIsAunthenticated} = useContext(AuthContext)

    console.log(user)

    const logoutHandler = () => {
        AuthService.logout().then(data => {
            if (data.success) {
                setUser(data.user)
                setIsAunthenticated(false)
                navigate('/')
            }
        })
    }

const unauthenticated = () => {
    return (
        <>
            <h4>Hello Guest</h4>
        </>
    )
}

const authenticated = () => {
    return (
        <>
            <h4>{user.username}</h4>
            <button onClick={logoutHandler}>logout</button>
        </>
    )
}

    return (
        <NavBarContainer>
            
            <ul>
                
                <li><Link to='/login'>Login</Link> </li>
                <li><Link to='/'>Noms On Wheels</Link> </li>
                <img src="https://imgur.com/a/FnUD8mc" alt="logo"></img>
                <li><Link to='/location'>Change Location</Link> </li>
                <li><Link to='/order'>Order Now</Link> </li>
                <h4>
                    {!isAuthenticated ? unauthenticated() : authenticated()}
                </h4>
            </ul>
            
        </NavBarContainer>
    );
}

export default Navbar