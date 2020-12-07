import Head from 'next/head'
import { useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {searchPath} from '../redux/searchPathReducer'

import styles from '../styles/Home.module.css'

import MenuBar from '../components/MenuBar/MenuBar'
import TopBar from '../components/TopBar/TopBar'
import SearchBar from '../components/SearchBar/SearchBar'
import SearchResult from '../containers/SearchResult/SearchResult'


export default function Home() {

  const searchResult = useSelector(state => state.paths.foundPaths)
  const dispatch = useDispatch()

  const [searching, setSearching] = useState(false)
  const [loading, setLoading] = useState(false)

  // handle change of input field
  const handleInputFieldChange = (event) => {
    setSearching(true)
    const inputKeyword = event.target.value;
    if (inputKeyword === ''){
      setSearching(false)
    } else {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 1500)
      dispatch(searchPath(inputKeyword))
    }
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
      <div className={!searching ? styles.home__neshe__bg : styles.home__neshe}>
         <header> { /*id="header" className={styles.menubar__section}> */}
          <MenuBar />
        </header>
        <div className={styles.home__container}>
          {!searching ? <TopBar /> : <></>}
          <SearchBar
            placeholder="Xəyalndakı ixtisası daxil et (Məs: Dizayner, Developer və s)"
            handleChange={handleInputFieldChange}
            handleSubmit={handleSubmit} />
          {searching ? loading ? <h1>loading...</h1> : <SearchResult searchResult={searchResult}/> : <></>}
        </div>
      </div>
    </>
  );

}
