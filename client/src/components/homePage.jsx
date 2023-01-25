import React from 'react';
import Recipelist from './recipeList';
import Searchbar from './searchBar';
import { useState,useEffect } from 'react';
import axios from 'axios'

const Homepage = () => {


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

    return (
        <div className="App" >
            <Searchbar search={search} />
            {recipes ? <Recipelist recipes={recipes}/> : <p>Nothing found 😿</p>} 
        </div>
    );
}

export default Homepage;
