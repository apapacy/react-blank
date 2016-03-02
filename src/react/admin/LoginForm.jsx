"use strict";
var React = require('react');

class LoginForm extends React.Component {
  render() {
    return (
      <div id="LoginForm" className="reveal-modal reveal tiny " data-reveal>
        <div className="row">
          <div className="medium-8 medium-centered large-8 large-centered small-8 small-centered columns ">
            <form>
              <div className="row column log-in-form">
                <h4 className="text-center">Log in with you email account</h4>
                <label>Email
                  <input type="text" placeholder="somebody@example.com"/>
                </label>
                <label>Password
                  <input type="text" placeholder="Password"/>
                </label>
                <input id="show-password" type="checkbox"/>
                <label htmlFor="show-password">Show password</label>
                <p>
                  <a ref="loginButton" type="submit" className="button expanded" href="javascript:">Log In</a>
                </p>
                <p className="text-center">
                  <a href="javascript:">Forgot your password?</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
  componentDidMount() {
  // foundation library prevent onClick event from <a onClick=...>
    $(this.refs.loginButton).on('click', () => {
      this.handleLogin.apply(this);
    });
  }
  componentWillUnmount() {
    $(this.refs.loginButton).off('click');
  }
  handleLogin(event) {
    alert("login++");
    console.log(this);
    console.log(event);
  }
}

module.exports = LoginForm;
