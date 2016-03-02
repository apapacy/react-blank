import $  from 'jquery';
var jQuery = $;
import foundation from "foundation";
import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './react/admin/LoginForm.jsx';

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


setTimeout(Open, 1)
