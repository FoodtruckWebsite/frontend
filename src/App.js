import {useState, useEffect, useContext} from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login'
import Register from './pages/Register'
import Navbar from './components/Navbar'
import { AuthContext }  from './services/AuthContext'


function App() {
  // pulling the states and functions from AuthContext
  const {user, setUser, isAuthenticated, setIsAunthenticated} = useContext(AuthContext)

  console.log(user)
  console.log(isAuthenticated)

  const [trucks, setTrucks] = useState([])
  useEffect(() => {
    fetch('http://localhost:8000/truck')
    .then(res => res.json)
    .then(items => setTrucks(items))
  }, [])

  return (
    <div>
      <Navbar/>
      <Routes>
          <Route path='/' element={ <Home trucks = {trucks}/>}/>
          <Route path='/login' element={ <Login />}/>
          <Route path='/register' element={ <Register />}/>
      </Routes>
    </div>
  );
}

export default App;
