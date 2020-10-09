import React from 'react';
import styles from './SearchResult.module.css';
import FoundProfessionCard from '../../components/FoundProfessionCard/FoundProfessionCard';

const SearchResult = ({searchResult}) => {
    return (
        <div class={styles.result__container}>
            <FoundProfessionCard foreignResource={true} freeContent={false}/>
            <FoundProfessionCard foreignResource={true} freeContent={true}/>
            <FoundProfessionCard foreignResource={true} freeContent={true}/>
            <FoundProfessionCard foreignResource={false} freeContent={true}/>
            <FoundProfessionCard foreignResource={true} freeContent={true}/>
            <FoundProfessionCard foreignResource={false} freeContent={true}/>
            <FoundProfessionCard foreignResource={true} freeContent={true}/>
            <FoundProfessionCard foreignResource={true} freeContent={true}/>
        </div>
    );
}

export default SearchResult;
