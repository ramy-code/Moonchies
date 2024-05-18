import React from "react";
import { useState, useEffect } from "react";
import recipeImage from '../assets/breakfast-monochromatic.svg'
import ingredientImage from '../assets/shopping-cart-monochromatic.svg'
const Searchbar = ({ search, isContentOnPage }) => {
  const [searchText, setSearchText] = useState("");
  const [searchType, setSearchType] = useState("ingredients");
  const [error, setError] = useState(false);
  const [searchData, setSearchData] = useState({
    searchType: searchType,
    searchText: searchText,
  });

  const handleType = (e) => {
    setSearchType(e.target.value);
    console.log(searchType);
  };


  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      if (!searchText || !searchType) {
        setError(true);
        return;
      } else {
        setError(false);
      }
      setSearchData({
        searchType: searchType,
        searchText: searchText,
      });
    }
  }


  const handleText = (e) => {
    let str = e.target.value;
    setSearchText(str);
  };

  const refreshForm = (e) => {
    let newArr = []
    setSearchData(newArr)
    setSearchText('')
  }

  const handleForm = (e) => {
    if (!searchText || !searchType) {
      setError(true);
      return;
    } else {
      setError(false);
    }

    setSearchData({
      searchType: searchType,
      searchText: searchText,
    });
  };

  useEffect(() => {
    if (searchText && searchType) {
      search(searchData);
    }
  }, [searchData]);
  return (
    <div className=" py-12 ">
      <div className="  flex justify-center w-screen ">
        < input
          placeholder={`Search your ${searchType}...`}
          className="w-1/2 h-12 border-2 border-cta rounded-l-2xl px-8"
          type="text"
          name="searchText"
          id="searchText"
          value={searchText}
          onChange={handleText}
          onKeyDown={handleKeyDown}
        />
        {searchData.length > 0 ? <span className="flex   text-xl  text-gray items-center bg-cta w-8 justify-center" onClick={refreshForm}>✖</span> : null}
        <p className=" bg-cta  rounded-r-2xl w-10 py-3    px-2 cursor-pointer" onClick={handleForm}>
          🔎
        </p>
      </div >

      {error && <p className="flex justify-center "> please fill all the fields </p>}
    </div >
  );
};

export default Searchbar;
