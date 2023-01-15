import './App.css';
import Searchbar from './components/searchBar';
import { useState,useEffect } from 'react';
import axios from 'axios'
function App() {
  const [ingridients, setIngridients] = useState([])
  const [recipe, setRecipe] = useState({});

  
  const search = (obj) => {
    setIngridients(obj);
  }

  const getRecipes = async (ingridientsArray) => {
    axios('http://localhost:5000/api')
    .then(res => setRecipe(res))
    .catch(err=> console.error(err))
  }


  console.log(ingridients);

  return (
    <div className="App">
      <Searchbar search={search} />
    </div>
  );
}

export default App;
