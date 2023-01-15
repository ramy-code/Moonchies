import React from 'react';
import { useState,useEffect } from 'react';

const Searchbar = ({ search }) => {
    const [searchText, setSearchText] = useState('')
    useEffect(() => {
        setSearchText(searchText)
    }, [searchText]);
    return (
        <div className="searchBar">
            <input type="text" name="searchBar" value={searchText} onChange={(e) => {setSearchText(e.target.value)}} />
            <p className='searchBtn' onClick={() => { search(searchText) }}> 🔎</p>
        </div>
    );
}

export default Searchbar;
