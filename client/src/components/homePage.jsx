import React from "react";
import Recipelist from "./recipeList";
import Searchbar from "./searchBar";
import { useState, useEffect, useReducer } from "react";
import axios from "axios";

const Homepage = () => {
  const [ingridients, setIngridients] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [isContentOnPage, setIsContentOnPage] = useState(false)
  const [sortMethod, setSortMethod] = useState('')
  const SORT_ACTIONS = {
    ALPHABETICAL: 'alphabetical',
    LIKES: 'likes',
    MISSING_INGREDIENTS: 'ingredientsMissing'
  }


  const sortRecipes = (sortMethod) => {
    switch (sortMethod) {
      case SORT_ACTIONS.ALPHABETICAL:
        recipes.sort((recipe1, recipe2) => recipe1.title > recipe2.title ? 1 : -1)
        break;
      case SORT_ACTIONS.LIKES:
        recipes.sort((recipe1, recipe2) => recipe1.likes > recipe2.likes ? 1 : -1)
        break;
      case SORT_ACTIONS.MISSING_INGREDIENTS:
        recipes.sort((recipe1, recipe2) => recipe1.missedIngredients.length < recipe2.missedIngredients.length ? 1 : -1)
        break;
      default:
        break;
    }
  }

  const search = (obj) => {
    setIngridients(obj);
  };

  const getRecipes = async (searchObj) => {
    axios
      .post("http://localhost:5000/api", searchObj)
      .then((res) => {
        return setRecipes(res.data.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    if (ingridients.searchText) {
      getRecipes(ingridients);
    }
  }, [ingridients]);


  useEffect(() => {
    if (recipes.length === 0) setIsContentOnPage(false)
    else setIsContentOnPage(true)
  }, [recipes])


  return (
    <div className="App">
      {!isContentOnPage &&
        <div className=" py-10 mt-10 flex justify-center text-5xl">
          <h1 className="moonchies flex justify-end">Moon<img className="w-10 " src="/cookie-com.svg" alt="" />hies</h1>
        </div>
      }

      <Searchbar search={search} isContentOnPage={isContentOnPage} />


      <p className='p-2 text-textLight'>Filter :</p>
      <div className="filter-container bg-cta inline p-2  mx-4 rounded-xl flex items-center">
        <div>

          <div>
            <input onChange={() => { setSortMethod('Alphabetical') }} value={SORT_ACTIONS.ALPHABETICAL} id={SORT_ACTIONS.ALPHABETICAL} type="radio" className='' />
            <label htmlFor={SORT_ACTIONS.ALPHABETICAL}> 🔤 </label>
          </div>

          <div>
            <input id={SORT_ACTIONS.LIKES} value={SORT_ACTIONS.LIKES} type="radio" className='' />
            <label htmlFor={SORT_ACTIONS.LIKES}>💓</label>
          </div>

          <div>
            <input id={SORT_ACTIONS.MISSING_INGREDIENTS} value={SORT_ACTIONS.MISSING_INGREDIENTS} type="radio" className='' />
            <label htmlFor={SORT_ACTIONS.MISSING_INGREDIENTS}> 🥨 </label>
          </div>
        </div>
      </div>

      {recipes ? <Recipelist recipes={recipes} /> : <p>Nothing found 😿</p>}
    </div>
  );
};

export default Homepage;
