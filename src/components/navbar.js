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
    button{
        background-color: Transparent;
        border: none;
        font-size: 16px
    }


`

const Navbar = () => {

    const navigate = useNavigate()

    const {user, setUser, isAuthenticated, setIsAunthenticated} = useContext(AuthContext)

    return (
        <NavBarContainer>
            <ul>
            { user?.role === 'owner' || user?.role === 'user' ? <li>Welcome {user.username}</li> : <li><Link to='/login'>Login</Link></li>}
            { user?.role === 'owner' || user?.role === 'user' ? <li onClick={() => {
                AuthService.logout().then(data => {
                    setUser(data.user)
                    setIsAunthenticated(false)
                    window.location.reload(false)
                })
                .then(navigate=('/'))
            }}>Logout</li> : null}
            { user?.role === 'owner' ? <li><Link to='/trucks/new'>Add Your Truck</Link></li> : null}
            <li><Link to='/'>Noms On Wheels</Link> </li>
            <img src="https://imgur.com/a/FnUD8mc" alt="logo"></img>
            <li><Link to='/location'>Change Location</Link> </li>
            </ul>
        </NavBarContainer>
    );
}

export default Navbar