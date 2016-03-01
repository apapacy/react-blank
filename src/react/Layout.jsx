"use strict";
var React = require('react');
var LoginForm = require('./admin/LoginForm.jsx');

class Layout extends React.Component {
  render() {
    return (
<html class="menu-closed" lang="ru">
<head>
  <meta charset="utf-8" />
  <meta content="IE=edge" http-equiv="X-UA-Compatible" />
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />

  <link href="/assets/bootstrap/css/bootstrap.css" rel="stylesheet" />
  <link href="/assets/bootstrap/css/bootstrap-theme.css" rel="stylesheet" />
  <link href="/assets/foundation/css/foundation.css" rel="stylesheet" />

  <script src000="/dependencies/js/require.js" type="text/javascript"></script>
  <script src000="/dependencies/js/admin/require.config.js" type="text/javascript"></script>
  <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
</head>
<body>
<LoginForm />
</body>
</html>)
  }
}

module.exports = Layout;