import './App.css';
import Searchbar from './components/searchBar';
import { useState,useEffect } from 'react';
import axios from 'axios'
function App() {
  const [ingridients, setIngridients] = useState([])
  const [recipe, setRecipe] = useState({});
 
  const search = (obj)=> {
    setIngridients(obj)
  }

  const getRecipes = async (searchObj) => {
    axios.post('http://localhost:5000/api',searchObj)
    .then(res => setRecipe(res.data))
    .catch(err=> console.error(err))
  }

  useEffect(() => {
    if (ingridients.searchText) { 
      getRecipes(ingridients)
    }
  }, [ingridients]);
  console.log(recipe);

  return (
    <div className="App">
      <Searchbar search={search} />
    </div>
  );
}

export default App;
