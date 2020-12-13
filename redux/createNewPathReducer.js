import {createPath} from "../services/pathServices"

export function createNewPath(newPath){
    return async (dispatch) => {
        const response = await createPath(newPath).catch(err => {
            console.error("Path creation failed:", err.message)
        })
        console.log("Result of createNewPath: ", response)

        if (response !== undefined) {
            dispatch({
                type: "CREATE_PATH",
                payload: response
            })
        } else {
            dispatch({
                type: "UNSUCCESSFUL_CREATE_PATH"
            })
        }
    }
}

export default function createNewPathReducer(state = {newPaths: [], success: null}, action) {
    switch(action.type) {
        case "CREATE_PATH":
            return {
                ...state,
                newPaths: state.newPath.concat(action.payload),
                success: true
            }
        case "UNSUCCESSFUL_CREATE_PATH":
            return {
                ...state,
                success: false
            }   
        default:
            return state    
    }
}