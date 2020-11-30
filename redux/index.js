import {createStore, applyMiddleware, combineReducers} from "redux"
import thunk from "redux-thunk"

import authModalReducer from "./authModalReducer"
import createPathModalReducer from "./createPathModalReducer"
import menuBarReducer from "./menuBarReducer"
import accountPageReducer from "./accountPageReducer"
import userAuthReducer from "./userAuthReducer"
// for debug
import {searchPath} from './searchPathReducer'

import searchPathReducer from "./searchPathReducer"


const rootReducer = combineReducers({
    foundPathes: searchPathReducer,
    authModal: authModalReducer,
    createPathModal: createPathModalReducer,
    menuBarIsOpen: menuBarReducer,
    accountPage: accountPageReducer,
    userAuth: userAuthReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

// for debug
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(searchPath("Front-end"))
export default store;
