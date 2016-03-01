var $ = require('jquery');
var jQuery = $;
var foundation=require("foundation")
var React = require('react');
var layout = require('./react/Layout.jsx');
React.render(
	React.createElement(layout),
	document.getElementById('layout')
);
alert(foundation)
