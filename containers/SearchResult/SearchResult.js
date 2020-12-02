import React from 'react';
import styles from './SearchResult.module.css';
import FoundPathCard from '../../components/FoundPathCard/FoundPathCard';
import AddPathCard from "../../components/AddPathCard/AddPathCard" 

const SearchResult = ({searchResult}) => {
    return (
        <div class={styles.result__container}>
            <AddPathCard />
            {searchResult.map(path => {
                return <FoundPathCard pathData={path}/>
            })}
        </div>
    );
}

export default SearchResult;
