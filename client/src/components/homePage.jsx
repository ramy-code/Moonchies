import React from "react";
import Recipelist from "./recipeList";
import Searchbar from "./searchBar";
import { useState, useEffect } from "react";
import axios from "axios";

const Homepage = () => {
  const [ingridients, setIngridients] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [isContentOnPage, setIsContentOnPage] = useState(false)
  const [sortMethod, setSortMethod] = useState("")
  const SORT_ACTIONS = {
    ALPHABETICAL: 'alphabetical',
    LIKES: 'likes',
    MISSING_INGREDIENTS: 'ingredientsMissing'
  }


  const sortRecipes = (sortMethod) => {
    switch (sortMethod) {
      case SORT_ACTIONS.ALPHABETICAL:
        setRecipes(recipes.sort((recipe1, recipe2) => recipe1.title < recipe2.title ? 1 : -1))
        break;
      case SORT_ACTIONS.LIKES:
        setRecipes(recipes.sort((recipe1, recipe2) => recipe1.likes > recipe2.likes ? 1 : -1))
        break;
      case SORT_ACTIONS.MISSING_INGREDIENTS:
        setRecipes(recipes.sort((recipe1, recipe2) => recipe1.missedIngredientCount < recipe2.missedIngredientCount ? 1 : -1))
        break;
      default:
        setRecipes(recipes.sort((recipe1, recipe2) => recipe1.title < recipe2.title ? 1 : -1))
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

  useEffect(() => {
    sortRecipes(sortMethod)
    console.log(recipes);
  }, [sortMethod])


  return (
    <div className="App">
      {!isContentOnPage &&
        <div className=" py-10 mt-10 flex justify-center text-5xl">
          <h1 className="moonchies flex justify-end">Moon<img className="w-10 " src="/cookie-com.svg" alt="" />hies</h1>
        </div>
      }

      <Searchbar search={search} isContentOnPage={isContentOnPage} />


      {recipes.length === 0 && ingridients.searchText ? <p className=" pt-11 text-center">Nothing found 😿</p> : <Recipelist recipes={recipes} />}
    </div >
  );
};

export default Homepage;
