import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'

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
      
    </div>
  );
}

export default App;
