import {useState} from "react"
import styles from "../../styles/Specialties.module.css"
import {useSelector, useDispatch} from "react-redux"
import MenuBar from "../../components/MenuBar/MenuBar"
import SearchBar from "../../components/SearchBar/SearchBar"
import SearchResult from "../../containers/SearchResult/SearchResult"
import AddPathCard from "../../components/AddPathCard/AddPathCard" 

export default function Specialties() {

    const searchResult = useSelector(state => state.foundPathes)
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
        <div>
            <header>
                <MenuBar />
            </header>
            <div className={styles.container}>
                <SearchBar
                    placeholder="Xəyalndakı ixtisası daxil et (Məs: Dizayner, Developer və s)"
                    handleChange={handleInputFieldChange}
                    handleSubmit={handleSubmit} />
                    <AddPathCard />
                {searching ? loading ? <h1>loading...</h1> : <SearchResult searchResult={searchResult}/> : <></>}
            </div>
        </div>
    );
}