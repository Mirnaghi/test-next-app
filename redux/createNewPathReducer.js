import {createPath} from "../services/pathServices"

export function createNewPath(newPath){
    return async (dispatch) => {
        const response = await createPath(newPath).catch(err => {
            console.error("Path creation failed:", err)
        })
        console.log("Result of createNewPath: ", response)
        dispatch({
            type: "CREATE_PATH",
            payload: response
        })
    }
}

export default function createNewPathReducer(state = [], action) {
    switch(action.type) {
        case "CREATE_PATH":
            return state.concat(action.payload)
        default:
            return state    
    }
}