import React from 'react';
import TopBar from '../../components/TopBar/TopBar';
import SearchBar from '../../components/SearchBar/SearchBar';

const Home = (props) => {
    return (
        <div className="container">
            <TopBar />
            <SearchBar />
        </div>
    );
}

export default Home;