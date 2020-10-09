import Head from 'next/head'
import { useState } from 'react'

import styles from '../styles/Home.module.css'

import MenuBar from '../components/MenuBar/MenuBar'
import TopBar from '../components/TopBar/TopBar'
import SearchBar from '../components/SearchBar/SearchBar'
import SearchResult from '../containers/SearchResult/SearchResult'


export default function Home() {

  const [userInput, setUserInput] = useState('');

  return (
    <>
      <Head>
        <title>PathFinder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MenuBar></MenuBar>
          <div className={styles.home__container}>
              {userInput === '' ? 
                  <>
                      <TopBar/> 
                      <SearchBar />
                  </> 
              : <>
                  <SearchBar/> 
                  <SearchResult/>
                </>}
          </div>
      </>
  );
  
}
