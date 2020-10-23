import Head from 'next/head'
import { useState } from 'react'

import styles from '../styles/Home.module.css'

import MenuBar from '../components/MenuBar/MenuBar'
import TopBar from '../components/TopBar/TopBar'
import SearchBar from '../components/SearchBar/SearchBar'
import SearchResult from '../containers/SearchResult/SearchResult'

import { getPathes } from '../services/pathServices'


export default function Home() {

  const [userInput, setUserInput] = useState('sfd');

  // pagination
  

  // handle change of input field
  const handleInputFieldChange = (event) => {
    const inputKeyword = event.target.value;
    console.log(inputKeyword);
    setUserInput(inputKeyword);
  }

  // handle submit
  const handleSubmit = async (event) => {
    console.log(userInput);
    const pathes = await getPathes();
    console.log(pathes);
  }

  return (
    <>
      <Head>
        <title>PathFinder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={userInput === "" ? styles.home__neshe__bg : styles.home__neshe}>
        <div id="header" className={styles.menubar__section}>
          <MenuBar />
        </div>
        <div className={styles.home__container}>
          {userInput === '' ? <TopBar /> : <></>}
          <SearchBar
            handleChange={handleInputFieldChange}
            handleSubmit={handleSubmit} />
          {userInput !== '' ? <SearchResult /> : <></>}
        </div>
      </div>
    </>
  );

}


