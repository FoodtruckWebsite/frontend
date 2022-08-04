import React, { useState, useContext } from 'react'
import AuthService from '../services/AuthService'
import { AuthContext } from '../services/AuthContext'
import { useNavigate } from 'react-router-dom'

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
    <div>
    <header>Log In</header>
    <form onSubmit={submitHandler}>
        <div>
            <label htmlFor='username'>Username</label>
            <input type="text" placeholder="Username" name="username" onChange={changeHandler}/>
        </div>
        <div>
            <label htmlFor='password'>Password</label>
            <input type="password" placeholder="Password" name="password" onChange={changeHandler}/>
        </div>
        <div >
            <button type='submit'>login</button>
        </div>
    </form>
      </div>
  )
}

export default Login