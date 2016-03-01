var $ = require('jquery');
var jQuery = $;
var foundation = require("foundation")
var React = require('react');
var ReactDOM = require('react-dom');
var LoginForm = require('./react/admin/LoginForm.jsx');
ReactDOM.render(
	React.createElement(LoginForm),
	document.getElementById('layout')
);


function Open() {
  alert("open")
  $('#LoginForm').foundation('reveal', 'open');
}

function Close() {
  alert("close")
  $('#LoginForm').foundation('reveal', 'close');
}

setTimeout(Close, 5000)

setTimeout(Open, 10000)

setTimeout(Close, 20000)
