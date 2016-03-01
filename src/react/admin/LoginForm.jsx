"use strict";
var React = require('react');

class LoginForm extends React.Component {
  render() {
    return (
<div id="myModal" className="reveal-modal">
  <form>
    <div className="row">
      <div className="medium-6 columns">
        <label>User Name
          <input type="text" placeholder=".medium-6.columns" />
        </label>
      </div>
      <div className="medium-6 columns">
        <label>Secret Password
          <input type="password" placeholder=".medium-6.columns" />
        </label>
      </div>
    </div>
  </form>
</div>
    )
  }
}

module.exports = LoginForm;
