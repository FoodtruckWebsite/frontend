import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

const StyledForm = styled.div`
    background-color: #c1e7f5;
    margin: 150px 0;
    padding: 30px;
    min-height: 70vw;

    img{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
    }

    div{
        padding-bottom: 5px;
    }

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


        setFormData({...formData, [e.target.id] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        axios.put(`http://localhost:8000/truck/${truckId}`,formData)
        .then(res => {
            setFormData(initialState)
            setTrucks(res.data)
            navigate('/', {replace: true})
        })

    }

    useEffect(() => {

        axios.get(`http://localhost:8000/truck/${truckId}`)
        .then(res => {
            setFormData(res.data)
        })
    }, [])

    return(

        <StyledForm onSubmit={handleSubmit}>
            <div>
                <h2>Edit Truck</h2>
                <label htmlFor='name'>Name </label>
                <input id='name' name='name' type='text' value={formData?.name} placeholder={formData?.name} onChange={handleChange} />
            </div>
            <div>

                <label htmlFor='category'>Category </label>
                <input id='category' name='category' type='text' value={formData?.category} placeholder={formData?.category} onChange={handleChange}/>

            </div>
            <div>
                <label htmlFor='location'>Location </label>
                <input id='location' name='location' type='text' value={formData?.location} placeholder={formData?.location} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor='rating'>Rating </label>
                <input id='rating' name='rating' type='text' value={formData?.rating} placeholder={formData?.rating} onChange={handleChange} />
            </div>
            <input type='submit' value='Update'/>
            <div>
            <br/>
            <img src='https://media1.giphy.com/media/lVBtp4SRW6rvDHf1b6/giphy-downsized-large.gif' alt='gif'/>
            </div>
        </StyledForm>
    )
}

export default TrucksEdit

