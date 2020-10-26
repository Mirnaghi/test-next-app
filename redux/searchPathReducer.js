import {getPathes} from '../services/pathServices'

export function searchPath(pathName) {
    return async (dispatch) => {
            const pathes = await getPathes().catch((e) => { return [] })
            const foundPathes = pathes.filter(path => { 
                return path.name.toLowerCase().includes(pathName.toLowerCase())
            })
            dispatch({ type: "SEARCH_PATH", payload: foundPathes})
            console.log("Result of bu", foundPathes)
    }
}

function searchPathReducer(foundPathes = [], action) {
    switch(action.type) {
        case "SEARCH_PATH":
            return action.payload
        default:
            return foundPathes    
    }
}

export default searchPathReducer;