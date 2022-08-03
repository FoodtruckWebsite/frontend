import React, {useState, useEffect} from 'react'

import { useParams, useNavigate } from 'react-router-dom'

import axios from 'axios'
import styled from 'styled-components'

const StyledForm = styled.form`


`

const TrucksEdit = ({ setTrucks }) => {
    let {truckId} = useParams()
    let navigate = useNavigate()

    const initialState = {
        name: '',
        catagory: '',
        location: '',
        rating: ''
    }

    const [formData, setFormData] = useState(initialState)

    const handleChange = (e) => {
        console.log(e.target)


        setFormData({...formData, [e.target.id] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        axios.put(`http://localhost:8000/truck/edit/${truckId}`,formData)
        .then(res => {
            setFormData(initialState)
            setTrucks(res.data)
            navigate('/', {replace: true})
        })

    }

    useEffect(() => {

        axios.get(`http://localhost:8000/trucks/edit/${truckId}`)
        .then(res => {
            setFormData(res.data)
        })
    }, [])

    return(

        <StyledForm onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'>Name</label>
                <input id='name' name='name' type='text' value={formData?.name} onChange={handleChange} />
            </div>
            <div>

                <label htmlFor='category'>Category</label>
                <input id='category' name='category' type='text' value={formData?.category} onChange={handleChange}/>

            </div>
            <div>
                <label htmlFor='location'>Location</label>
                <input id='location' name='location' type='text' value={formData?.location} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor='rating'>Rating</label>
                <input id='rating' name='rating' type='text' value={formData?.rating} onChange={handleChange} />
            </div>
            <input type='submit' value='Edit Truck'/>

        </StyledForm>
    )
}

export default TrucksEdit

