import React from 'react';
import TopBar from '../../components/TopBar/TopBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import './Home.css'
import {useState} from 'react';
import SearchResult from '../../containers/SearchResult/SearchResult';

const Home = (props) => {
    const [userInput, setUserInput] = useState('hdchg');
    
    return (
        
            <div className="home__container">
                {userInput === '' ? 
                    <React.Fragment>
                        <TopBar/> 
                        <SearchBar />
                    </React.Fragment> 
                : <React.Fragment>
                    <SearchBar/> 
                    <SearchResult/>
                  </React.Fragment>}
            </div>
        
    );
    

}

export default Home;