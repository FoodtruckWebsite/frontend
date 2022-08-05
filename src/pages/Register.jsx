import React, { useState, useEffect, useRef } from 'react'
import AuthService from '../services/AuthService'
import {AuthContext} from '../services/AuthContext'
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components'

const RegisterContainer= styled.div`
    background-color: #c1e7f5;
    margin: 150px 0;
    padding: 30px;
    min-height: 100vw;

    div{
        padding: 3px;
    }

    header{
        font-weight: bold;
        font-size: 25px;
    }

    img{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
    }
    
    span{
        opacity: 0;
    }
`

const Register = () => {

    const navigate = useNavigate()

    const [user, setUser] = useState({username: '', password: '', email: '', role:''})
    let timerID = useRef(null)

    useEffect(() => {
        return () => {
            clearTimeout(timerID)
        }
    }, [])

    const resetForm = () => {
        setUser({username: '', email: '', password: '', role: ''})
    }

    const changeHandler = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault()
        AuthService.register(user).then(data => {
            resetForm()
            navigate('/')
        })
    }

  return (
    <RegisterContainer>
    <br/>
    <header>Sign Up</header><br/>
    <form onSubmit={submitHandler}>
        <div>
            <label htmlFor='username'>Username </label>
            <input type="text" id="username" placeholder="Username" name="username" onChange={changeHandler}/>
        </div>
        <div>
            <label htmlFor='password'>Password </label>
            <input type="password" id="password" placeholder="Password" name="password" onChange={changeHandler}/>
        </div>
        <div>
            <label htmlFor='email'>Email </label>
            <input type="text" id="email" placeholder="Email" name="email" onChange={changeHandler}/>
        </div>
        <div>
            <span>s</span>
            <label htmlFor='role'> User</label>
            <input type="radio" id="user-role" name="role" value="user" onChange={changeHandler}/>
            <span>set</span>
            <label htmlFor='role'>Owner</label>
            <input type="radio" id="owner-role" name="role" value="owner" onChange={changeHandler}/>
        </div>
        <div >
            <button type='submit'>submit</button>
        </div>
        <img src='https://media0.giphy.com/media/40cxBsgqqwb65M5ivp/giphy.gif' alt='gif'/>
    </form>
      </RegisterContainer>
  )
}

export default Register