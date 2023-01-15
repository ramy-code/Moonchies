import React from 'react';
import { useState } from 'react';

const Searchbar = ({ search }) => {


    const [searchText, setSearchText] = useState('')
    const [searchType, setSearchType] = useState('')
    const [error, setError] = useState(false);
    const [searchData, SetsearchData] = useState({
        searchType: searchType,
        searchText: searchText,
    });

    const handleType = (e) => {
        setSearchType(e.target.value);
    }
    
    const handleText = (e) => {
        let str = e.target.value.split(',')
        setSearchText(str)
    }
    const handleForm = (e) => {
        if (!searchText || !searchType) {
            setError(true)
            return;
        } else {
            setError(false);
        }
        SetsearchData({
            searchType: searchType,
            searchText: searchText.map((val) => (val.trim()))
        })
        console.log(searchData.searchText);
        search(searchData);
    }
    return (
        <div className="searchBar">

            <div className="searchField">
                <input type="text" name="searchText" id="searchText" value={searchText} onChange={handleText} />
            </div>

            <div className="radios">

                <div className="radioGroup">
                    <label htmlFor="searchType"> Search by recipe</label>
                    <input onChange={handleType} type="radio" name="searchType" value="recipe" id="" />
                </div>

                <div className="radioGroup">
                    <label htmlFor="searchType"> Search by ingridient </label>
                    <input onChange={handleType} type="radio" name="searchType"  value="ingridient" id="" />
                </div>

            </div>
            
            <p className='searchBtn' onClick={handleForm}> 🔎</p>


            {error &&  <p> please fill all the fields </p> }
        </div>
    );
}

export default Searchbar;
