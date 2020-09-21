import React from 'react';
import './SearchResult.css';
import FoundProfessionCard from '../../components/FoundProfessionCard/FoundProfessionCard';

const SearchResult = ({searchResult}) => {
    return (
        <div class="result__container">
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
