import {createPath} from "../services/pathServices"

export function createNewPath(data){
    return async (dispatch) => {
        const response = await createPath(data).catch(err => {
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
                newPaths: state.newPaths.concat(action.payload.data),
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