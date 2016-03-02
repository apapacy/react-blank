"use strict"
import {createStore} from 'redux'
import loginReducer from './reducers'
import {userLoginSend, userLoginSuccess, userLoginFailure, userLogout} from './actions'
export let store = createStore(loginReducer)

console.log(loginReducer)


let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)


//unsubscribe()

//store.dispatch(userLoginFailure("Joker", {}))

store.dispatch({type:"USER_LOGIN_FAILURE", name:"joker"})
store.dispatch(userLoginSuccess("Truer", {}))

let next = loginReducer(store.getState(),{type:"USER_LOGIN_SEND", name:"sender"})

console.log(next)
