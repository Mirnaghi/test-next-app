import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'

// for debug
import {searchPath} from './searchPathReducer'

import searchPathReducer from "./searchPathReducer"

const rootReducer = combineReducers({
    foundPathes: searchPathReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

// for debug
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(searchPath("Front-end"))
export default store;
