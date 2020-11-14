import {logInUserService, signInUserService} from '../services/userAuthentication'

export function signInUser(userData) {
    return async (dispatch) => {
        const response = await signInUserService(userData).catch(e => {return {user: {}, status: 1}})
        console.log(response)
        dispatch({
            type: "SIGN_IN",
            payload: response
        })
    }
}

export function logInUser(userData) {
    return async (dispatch) => {
        const response = await logInUserService(userData).catch(e => console.error(e))
        console.log("Login res:", response)
        dispatch({
            type: "LOGIN",
            payload: response
        })
    }
}


export default function userAuthReducer(
    userAuth = {
        status: 1, 
        user: {}
    }, action) {
        switch(action.type){
            case "SIGN_IN":
                return {
                    ...userAuth,
                    status: 0,
                    user: action.payload.user
                }
            case "LOG_IN":
                return {
                    ...userAuth,
                    status: 0,
                    user: action.payload.user
                }
            default:
                return userAuth     
        }
}