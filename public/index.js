var $ = require('jquery');
var jQuery = $;
var foundation = require("foundation")
var React = require('react');
var layout = require('./react/Layout.jsx');
React.render(
	React.createElement(layout),
	document.getElementById('layout')
);


function Open() {
  $('#myModal').foundation('reveal', 'open');
}

function Close() {
  $('#myModal').foundation('reveal', 'close');
}

setTimeout(Close, 5000)

setTimeout(Open, 10000)

setTimeout(Close, 15000)
