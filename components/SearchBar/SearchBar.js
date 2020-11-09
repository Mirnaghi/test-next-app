import React from "react";
import styles from './SearchBar.module.css';

const SearchBar = ({ placeholder, handleChange, handleSubmit, value }) => {
    return (
        <div className = {styles.search__bar}>
            <input onChange={handleChange} value={value} name="search_input" className = {styles.search__bar__input} placeholder = {placeholder}/>
            <button onClick={handleSubmit} className = {styles.search__bar__button}>
                AXTAR
            </button>
        </div>
    )
}




export default SearchBar;
