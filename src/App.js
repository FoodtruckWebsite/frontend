import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';


function App() {
  const [foodCategories, setFoodCategories] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/truck')
    .then(res => res.json)
    .then(trucks => setFoodCategories(trucks))
  }, [])
  console.log(foodCategories)
  return (
    <div>
      <Routes>
          <Route path='/' element={ <Home foodCategories={foodCategories}></Home>}/>
      </Routes>
    </div>
  );
}

export default App;
