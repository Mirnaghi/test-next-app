import {logInUserService, signInUserService} from '../services/userAuthentication'

export function signInUser(userData) {
    return async (dispatch) => {
        const response = await signInUserService(userData).catch(e => {console.log(e)})
        console.log("Inside action", response)
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

export function logoutUser() {
    return {
        type: "LOGOUT",
        payload: {
            status: 1,
            user: {}
        }
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
                    status: action.payload.status,
                    user: action.payload.data.user
                }
            case "LOGIN":
                return {
                    ...userAuth,
                    status: action.payload.status,
                    user: action.payload.data.user
                }
            case "LOGOUT":
                return {
                    ...userAuth,
                    status: action.payload.status,
                    user: action.payload.user
                }    
            default:
                return userAuth     
        }
}