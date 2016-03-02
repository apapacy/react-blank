import {createStore} from 'redux'
import {loginReducer} from './redusers'
import {userLoginSend, userLoginSuccess, userLoginFailure, userLogout} from './actions'
var store = createStore(loginReducer)
console.log(store.getState());

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

store.dispatch(userLoginSuccess("Truer", {}))

console.log(store.getState())
