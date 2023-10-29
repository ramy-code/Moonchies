import React from "react";
import Recipelist from "./recipeList";
import Searchbar from "./searchBar";
import { useState, useEffect } from "react";
import axios from "axios";

const Homepage = () => {
  const [ingridients, setIngridients] = useState([]);
  const [recipes, setRecipes] = useState([]);

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

  return (
    <div className="App">
      {recipes.length < 1 &&
        <div className=" py-10 mt-10 flex justify-center text-5xl">
          <h1 className="moonchies flex justify-end">Moon<img className="w-10 " src="/cookie-com.svg" alt="" />hies</h1>
        </div>
      }
      <Searchbar search={search} />
      {recipes ? <Recipelist recipes={recipes} /> : <p>Nothing found 😿</p>}
    </div>
  );
};

export default Homepage;
