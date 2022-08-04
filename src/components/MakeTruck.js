import React, { useState, useContext } from 'react'
import AuthService from '../services/AuthService'
import { AuthContext } from '../services/AuthContext'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Trucks from './Trucks'

const StyledForm = styled.form`
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