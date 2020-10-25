import React from 'react';
import styles from './SearchResult.module.css';
import FoundPathCard from '../../components/FoundPathCard/FoundPathCard';

const SearchResult = ({searchResult}) => {
    return (
        <div class={styles.result__container}>
            {searchResult.map(path => {
                return <FoundPathCard path={path}/>
            })}
        </div>
    );
}

export default SearchResult;
