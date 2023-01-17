import React from 'react';
import { useState,useEffect } from 'react';

const Searchbar = ({ search }) => {


    const [searchText, setSearchText] = useState('')
    const [searchType, setSearchType] = useState('ingredients')
    const [error, setError] = useState(false);
    const [searchData, SetsearchData] = useState({
        searchType: searchType,
        searchText: searchText,
    });

    const handleType = (e) => {
        setSearchType(e.target.value);
    }
    
    const handleText = (e) => {
        let str = e.target.value;
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
            searchText: searchText
        })
    }

    useEffect(() => {
        if (searchText && searchType) {
            search(searchData);
        } 
    }, [searchData]);
    return (
        <div className="searchBar">

            <div className="searchField">
                <input placeholder={`Search your ${searchType}...`} type="text" name="searchText" id="searchText" value={searchText} onChange={handleText} />
                <p className='searchBtn' onClick={handleForm}> 🔎</p>
            </div>

            <div className="radios">

                <div className="radioGroup">
                    <input onChange={handleType} type="radio" name="searchType"  value="recipe" id="" />
                    <label htmlFor="searchType"> Search by recipe</label>
                </div>

                <div className="radioGroup">
                    <input onChange={handleType} type="radio" name="searchType"  defaultChecked="true" value="ingredients"  id="" />
                    <label htmlFor="searchType"> Search by ingredient </label>
                </div>

            </div>
            


            {error &&  <p className='errorText' > please fill all the fields </p> }
        </div>
    );
}

export default Searchbar;
