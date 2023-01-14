import React from 'react';
import { useState } from 'react';

const Searchbar = ({ search }) => {
    const [searchText,setSearchText] = useState('')
    return (
        <div className="searchBar">
            <input type="text" name="searchBar" value={searchText} onChange={(e) => {setSearchText(e.target.value)}} />
            <button onClick={() => { search(searchText) }}> 🔎</button>
            <p>{searchText}</p>
        </div>
    );
}

export default Searchbar;
