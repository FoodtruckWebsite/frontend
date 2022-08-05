import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import AuthService from '../services/AuthService'
import { AuthContext } from '../services/AuthContext'
import { useNavigate } from 'react-router-dom'
// import Container from 'react-bootstrap/Navbar'


const NavbarContainer = styled.div`
        background-color : #FFFDD0;
        position: fixed;
        top: 0;
        width : 100vw;
        text-decoration : underline;
        padding: 1px;
        z-index: 1;

    ul{
        display: flex;
        justify-content: space-evenly;
    }
    li{
        list-style: none;
        font-size: 2vw;

    }
    button{
        background-color: Transparent;
        border: none;
        font-size: 16px
    }
    img{
        max-width: 30%;
        padding: 0;
    }
`

const Navbar = () => {

    const navigate = useNavigate()

    const {user, setUser, isAuthenticated, setIsAunthenticated} = useContext(AuthContext)

    return (
        <NavbarContainer>
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
            <img src="https://i.imgur.com/SUhi1mj.png" alt="NOW Logo"></img>
            <li><Link to='/location'>Change Location</Link> </li>
            { user?.role === 'owner' || user?.role === 'user' ? null : <li><Link to='/register'>Register</Link></li>}
            </ul>
        </NavbarContainer>
    );
}

export default Navbar
