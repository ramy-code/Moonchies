import './App.css';
import Searchbar from './components/searchBar';
import { useState,useEffect } from 'react';
import axios from 'axios'
import Recipecard from './components/recipeCard';
import Recipelist from './components/recipeList';
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
        res.data.forEach(data => {
          console.log(data);
          arr.push(data)
        });
        // console.log(arr);
        return setRecipes(arr)
    })
    .catch(err=> console.error(err))
  }

  useEffect(() => {
    if (ingridients.searchText) { 
      getRecipes(ingridients)
    }
  }, [ingridients]);
  
  console.log(recipes);

  return (
    <div className="App">
      <Searchbar search={search} />
      <Recipelist recipes={recipes}/>
    </div>
  );
}

export default App;
