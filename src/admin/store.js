"use strict"
import {createStore} from 'redux'
import * as reducers from './reducers'
import {userLoginSend, userLoginSuccess, userLoginFailure, userLogout} from './actions'
import { combineReducers } from 'redux';
import {loginReducer} from './reducers'


export let store = createStore(loginReducer)
//export let store = combineReducers(reducers)()

console.log(store)


//let unsubscribe = store.subscribe(() =>
//  console.log(store.getState())
//)


//unsubscribe()

//store.dispatch(userLoginFailure("Joker", {}))

//store.dispatch({type:"USER_LOGIN_FAILURE", name:"joker"})
//store.dispatch(userLoginSuccess("Truer", {}))

//let next = loginReducer(store.getState(),{type:"USER_LOGIN_SEND", name:"sender"})

//console.log(next)
