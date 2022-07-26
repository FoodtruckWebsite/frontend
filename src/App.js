import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Truck from './components/Truck';
import Trucks from './components/Trucks';
import MakeTruck from './components/MakeTruck';
import TrucksEdit from './pages/TrucksEdit';
import Login from './pages/Login'
import Register from './pages/Register'
import AboutUs from './pages/AboutUs';
import Trademark from './pages/Trademark';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AuthProvider from './services/AuthContext'


function App() {
  const [trucks, setTrucks] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/truck')
    .then(res => res.json())
    .then(data => setTrucks(data))
    },[])
    // console.log(trucks)

 
  
  return (
    <div>
      <AuthProvider>
      <Navbar/>
      <Routes>
          <Route path='/' element={ <Home trucks = {trucks}/>}/>
          <Route path='/trucks/:truckId' element={ <Truck trucks = {trucks} setTrucks={setTrucks}/>}/>
          <Route path='/trucks' element={ <Trucks trucks = {trucks} setTrucks={setTrucks}/>}/>
          <Route path='/trucks/new' element={ <MakeTruck trucks = {trucks} setTrucks={setTrucks}/>}/>

          <Route path='/trucks/:truckId/edit' element={ <TrucksEdit trucks = {trucks} setTrucks={setTrucks}/>}/>
          <Route path='/login' element={ <Login />}/>
          <Route path='/register' element={ <Register /> }/>
          <Route path='/aboutus' element={<AboutUs />}/>
          <Route path='/trademark' element={<Trademark />}/>

      </Routes>
      <Footer/>
      </AuthProvider>
    </div>
  );
}

export default App;

