import React from "react";
import './SearchBar.css';

const SearchBar = () => {
    return (
        <div className = "search-bar">
            <input className = "search-bar__input" placeholder = "Xəyalndakı ixtisası daxil et (Məs: Dizayner, Developer və s)"/>
            <button className = "search-bar__button">
                AXTAR
            </button>
        </div>
    )
}




export default SearchBar;


