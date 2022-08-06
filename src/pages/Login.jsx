import React, { useState, useContext } from 'react'
import AuthService from '../services/AuthService'
import { AuthContext } from '../services/AuthContext'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const LoginContainer= styled.div`
    margin: 150px 0;
    padding: 30px;
    background-color: #c1e7f5;
    min-height: 100vw;

    div{
        padding: 3px;
    }

    header{
        font-weight: bold;
        font-size: 25px;
    }

    label{
        text-align: bottom;
    }
    img{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
    }

`

const Login = () => {

    const navigate = useNavigate()
    
    const [user, setUser] = useState({username: '', password: ''})
    const authContext = useContext(AuthContext)

    const changeHandler = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault()
        AuthService.login(user).then(data => {
            const {isAuthenticated, user} = data
            if (isAuthenticated) {
                authContext.setUser(user)
                authContext.setIsAuthenticated(isAuthenticated)
                navigate('/')
            }
        })
    }

  return (
    <LoginContainer>
    <br/>
    <header>Log In</header><br/>
    <form onSubmit={submitHandler}>
        <div>
            <label htmlFor='username'>Username </label>
            <input type="text" placeholder="Username" name="username" onChange={changeHandler}/>
        </div>
        <div>
            <label htmlFor='password'>Password </label>
            <input type="password" placeholder="Password" name="password" onChange={changeHandler}/>
        </div>
        <div >
            <button type='submit'>login</button>
        </div>
        <img src="https://thumbs.gfycat.com/SandyElementaryHammerheadshark-max-1mb.gif" alt="cartoon"/>
    </form>

      </LoginContainer>
  )
}

export default Login