import React from 'react';
import { useState } from 'react';

const Searchbar = ({ search }) => {


    const [searchText, setSearchText] = useState('')
    const [searchType, setSearchType] = useState('');
    const [searchData, SetsearchData] = useState({
        searchType: searchType,
        searchText: searchText,
    });
    return (
        <div className="searchBar">
            <div className="searchField">

            <input type="text" name="searchBar" value={searchText} onChange={(e) => {setSearchText(e.target.value)}} />
            </div>
            <div className="radios">
                <div className="radioGroup">
                    <input type="radio" name="searchType" value="recipe" id="" />
                   <p>Search by Recipe</p>
                </div>
                <div className="radioGroup">
                    <input type="radio" name="searchType"  value="ingridient" id="" />
                    <p>Search by ingridient</p>
                </div>
            </div>
            <p className='searchBtn' onClick={() => { search(searchText) }}> 🔎</p>

        </div>
    );
}

export default Searchbar;
