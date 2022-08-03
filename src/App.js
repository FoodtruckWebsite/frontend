import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Truck from './components/Truck';
import Trucks from './components/Trucks';
import MakeTruck from './components/MakeTruck';


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
      <Routes>
          <Route path='/' element={ <Home trucks = {trucks}/>}/>
          <Route path='/trucks/:truckId' element={ <Truck truck = {trucks} setTrucks={setTrucks}/>}/>
          <Route path='/trucks' element={ <Trucks trucks = {trucks} setTrucks={setTrucks}/>}/>
          <Route path='/trucks/new' element={ <MakeTruck trucks = {trucks} setTrucks={setTrucks}/>}/>
      </Routes>
    </div>
  );
}

export default App;
