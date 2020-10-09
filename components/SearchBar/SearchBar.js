import React from "react";
import styles from './SearchBar.module.css';

const SearchBar = () => {
    return (
        <div className = {styles.search__bar}>
            <input className = {styles.search__bar__input} placeholder = "Xəyalndakı ixtisası daxil et (Məs: Dizayner, Developer və s)"/>
            <button className = {styles.search__bar__button}>
                AXTAR
            </button>
        </div>
    )
}




export default SearchBar;


