"use strict";
var React = require('react');
var MyChildComponent = require("./MyChildComponent.jsx");
console.log(MyChildComponent.toString());

class MyComponent extends React.Component {
  render() {
    return <div>Hello World***<h1><MyChildComponent /></h1> {this.props.name}</div>;
  }
}

module.exports = MyComponent;
