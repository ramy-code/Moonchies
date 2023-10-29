import React from "react";
import { useState, useEffect } from "react";
import recipeImage from '../assets/breakfast-monochromatic.svg'
import ingredientImage from '../assets/shopping-cart-monochromatic.svg'
const Searchbar = ({ search }) => {
  const [searchText, setSearchText] = useState("");
  const [searchType, setSearchType] = useState("ingredients");
  const [error, setError] = useState(false);
  const [searchData, SetsearchData] = useState({
    searchType: searchType,
    searchText: searchText,
  });

  const handleType = (e) => {
    setSearchType(e.target.value);
  };


  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      if (!searchText || !searchType) {
        setError(true);
        return;
      } else {
        setError(false);
      }

      SetsearchData({
        searchType: searchType,
        searchText: searchText,
      });
    }
  }


  const handleText = (e) => {
    let str = e.target.value;
    setSearchText(str);
  };
  const handleForm = (e) => {
    if (!searchText || !searchType) {
      setError(true);
      return;
    } else {
      setError(false);
    }

    SetsearchData({
      searchType: searchType,
      searchText: searchText,
    });
  };

  useEffect(() => {
    if (searchText && searchType) {
      search(searchData);
    }
  }, [searchData.searchText]);
  return (
    <div className="shadow-lg pb-16">
      <div className="  flex justify-center w-100 ">
        < input
          placeholder={`Search your ${searchType}...`}
          className="w-1/3 h-12 border-2 border-cta rounded-l-2xl px-8"
          type="text"
          name="searchText"
          id="searchText"
          value={searchText}
          onChange={handleText}
          onKeyDown={handleKeyDown}
        />
        <p className=" bg-cta  rounded-r-2xl w-10 py-3  absolute  px-2  left-2/3 cursor-pointer" onClick={handleForm}>
          🔎
        </p>
      </div >

      <div className="  min-h-32 flex justify-center gap-5 py-3 ">
        <div className="searchTypeCheckboxes">
          <input
            onChange={handleType}
            type="radio"
            name="searchType"
            defaultChecked="true"
            value="ingredients"
            id="ingredient"
          />
          <label htmlFor="ingredient"> Search by ingredient
            <img className=" w-32" src={ingredientImage} alt="" />
          </label>
        </div>

        <div className="searchTypeCheckboxes">
          <input
            onChange={handleType}
            type="radio"
            name="searchType"
            value="recipe"
            id="recipe"
          />
          <label htmlFor="recipe"> Search by recipe
            <img src={recipeImage} alt="" />
          </label>
        </div>
      </div>

      {error && <p className="flex justify-center"> please fill all the fields </p>}
    </div >
  );
};

export default Searchbar;
