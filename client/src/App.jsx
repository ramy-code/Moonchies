import './App.css';
import Searchbar from './components/searchBar';
import { useState,useEffect } from 'react';
import axios from 'axios'
import Recipecard from './components/recipeCard';
function App() {
  const [ingridients, setIngridients] = useState([])
  const [recipes, setRecipes] = useState([]);
 
  const search = (obj)=> {
    setIngridients(obj)
  }

  const getRecipes = async (searchObj) => {
    axios.post('http://localhost:5000/api',searchObj)
      .then((res) => {
        let arr = []
        return setRecipes(Object.values(res.data))
    })
    .catch(err=> console.error(err))
  }

  useEffect(() => {
    if (ingridients.searchText) { 
      getRecipes(ingridients)
    }
  }, [ingridients]);
  
  // console.log(Object.values(recipes));

  return (
    <div className="App">
      <Searchbar search={search} />
      {recipes.map(recipe => <Recipecard key={ recipe.id} recipe={recipe}/>)}
    </div>
  );
}

export default App;
