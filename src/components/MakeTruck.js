import React, { useState, useContext } from 'react'
import AuthService from '../services/AuthService'
import { AuthContext } from '../services/AuthContext'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Trucks from './Trucks'

const StyledForm = styled.form`
  background-image: url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/13a11e48-43c5-4202-a826-add36e70e401/dce36fl-3eed859f-9c47-4b7f-9d8a-c17a1a24f704.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzEzYTExZTQ4LTQzYzUtNDIwMi1hODI2LWFkZDM2ZTcwZTQwMVwvZGNlMzZmbC0zZWVkODU5Zi05YzQ3LTRiN2YtOWQ4YS1jMTdhMWEyNGY3MDQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.PHdD0WPiXgz2lYMJLh-IutzxtZ29XALrIvWbR86iTcY");
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 650px;
  margin-top: -20px;
`

const MakeTruck = ({setTrucks, trucks}) => {
  const initialState = {
        name: '',
        catagory: '',
        location: '',
        rating: ''
  }

  const addTruck = (truck) => {
    setTrucks([...trucks, truck])
  }

  const {user, setUser, isAuthenticated, setIsAunthenticated} = useContext(AuthContext)

  const navigate = useNavigate()

  const [formData, setFormData] = useState(initialState)

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id] : e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8000/truck', formData)
    .then(res => {
        setFormData(initialState)
        addTruck(res.data)
        navigate('/', {replace: true})
    })
}

    return (
        <StyledForm onSubmit={handleSubmit}>
                <div>
        {isAuthenticated === true && user?.role === 'owner' ? 
            <div>
            <div>
                <label htmlFor='name'>Name</label>
                <input id='name' name='name' type='text' onChange={handleChange}></input>
            </div>
            <div>
                <label htmlFor='category'>Category</label>
                <input id='category' name='category' type='text' onChange={handleChange}></input>
            </div>
            <div>
                <label htmlFor='location'>Location</label>
                <input id='location' name='location' type='text' onChange={handleChange}></input>
            </div>
            <div>
                <label htmlFor='rating'>Rating</label>
                <input id='rating' name='rating' type='text' onChange={handleChange}></input>
            </div>
            <input type='submit' value='Create Truck' />
            </div>
        : <h1>You are not authorized to access page</h1>}
    </div>
        </StyledForm>
    )
}

export default MakeTruck