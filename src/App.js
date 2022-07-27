import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';


function App() {
  const [trucks, setTrucks] = useState([])
  useEffect(() => {
    fetch('http://localhost:8000/truck')
    .then(res => res.json)
    .then(items => setTrucks(items))
  }, [])
  console.log(trucks)
  return (
    <div>
      <Routes>
          <Route path='/' element={ <Home trucks = {trucks}/>}/>
      </Routes>
    </div>
  );
}

export default App;
