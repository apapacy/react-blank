import $  from 'jquery'
import foundation from "foundation"
import React from 'react'
import ReactDOM from 'react-dom'
import LoginForm from './react/admin/LoginForm.jsx'
import {store} from './admin/store'
import {connect} from 'react-redux'
import {Provider} from 'react-redux'

let jQuery = $
//let loginForm = React.createElement(LoginForm)
//let dispatcher = connect()(LoginForm)
console.log(store)

let rootElement = document.getElementById('layout')
React.render(
  <Provider ref="redux" store={store}>
    <LoginForm />
  </Provider>,
  rootElement
)



//ReactDOM.render(loginForm, document.getElementById('layout'))



function Open() {
  alert("open")
  $('#LoginForm').foundation('reveal', 'open')
}

function Close() {
  alert("close")
  $('#LoginForm').foundation('reveal', 'close')
}


setTimeout(Open, 1)
