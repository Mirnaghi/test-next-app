import {getPaths} from '../services/pathServices'

export function getAllPaths() {
    return async (dispatch) => {
        const paths = await getPathes().catch((e) => { return [] })
        // for debug
        console.log("Pathes in getAllPaths: ",paths)
        dispatch({
            type: "GET_ALL_PATHS",
            payload: paths
        })
    }
}
 
export function searchPath(pathName) {
    return async (dispatch) => {
            const paths = await getPaths().catch((e) => { return [] })

            // for debug
            console.log("Paths: ",paths)

            const foundPaths = paths.data.filter(path => { 
                return path.name.toLowerCase().includes(pathName.toLowerCase())
            })
            dispatch({ type: "SEARCH_PATH", payload: foundPaths})
            console.log("Result of bu", foundPaths)
    }
}

function searchPathReducer(state = {allPaths: [], foundPaths: [] }, action) {
    switch(action.type) {
        case "GET_ALL_PATHS":
            return {
                ...state,
                allPaths: action.payload
            }
        case "SEARCH_PATH":
            return {
                ...state,
                foundPaths: action.payload
            }
        default:
            return state    
    }
}

export default searchPathReducer;