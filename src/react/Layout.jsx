"use strict";
var React = require('react');
var LoginForm = require('./admin/LoginForm.jsx');
import _ from 'lodash';
class Layout extends React.Component {
constructor(){
super();
}
  render() {
    return (
<html className="menu-closed" lang="ru">
<head>
  <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />

  <link href="/assets/bootstrap/css/bootstrap.css" rel="stylesheet" />
  <link href="/assets/bootstrap/css/bootstrap-theme.css" rel="stylesheet" />
  <link href="/assets/foundation/css/foundation.css" rel="stylesheet" />

  <script src000="/dependencies/js/require.js" type="text/javascript"></script>
  <script src000="/dependencies/js/admin/require.config.js" type="text/javascript"></script>
  <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
  <script src00="/assets/foundation/js/foundation.js" type="application/javascript"></script>
  <script src00="/assets/bootstrap/js/bootstrap.js" type="application/javascript"></script>
</head>
<body>
<div id="layout"></div>
<div dangerouslySetInnerHTML={{__html:this.props.script}}></div>
</body>
</html>)
  }
}

module.exports = Layout;
