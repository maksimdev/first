import React, { Component } from 'react';
import './formStyle.css';

//<Form action="login" method="post">
class Form extends Component {
  constructor (props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      usernameValid: false,
      passwordValid: false,
      formValid: false,
    }
  }

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => {
                    this.validateField(name, value);
                  }
                );
  }

  validateField(fieldName, value) {
    let usernameValid = this.state.usernameValid;
    let passwordValid = this.state.passwordValid;
    switch(fieldName) {
      case 'username':
        usernameValid = value.match(/^([\w]{4,})$/i) ? true : false;
        break;
      case 'password':
        passwordValid = value.length >= 4;
        break;
      default:
        break;
    }
    this.setState(
                {
                  usernameValid: usernameValid,
                  passwordValid: passwordValid
                },
                  this.validateForm
    );
  }
  validateForm() {
    this.setState({
                    formValid: this.state.usernameValid &&
                               this.state.passwordValid
                  }
                 );
  }

  render() {
    return(
      <form action={`/${this.props.action}`} method={this.props.method}>
          <div>
              <label>Username:</label>
              <input
               type="text"
               name="username"
               placeholder="Username"
               value={this.state.username}
               onChange={this.handleUserInput.bind(this)}
               className={`labelForm ${!this.state.usernameValid ? 'labelFormError' : ''}`}
              />
          </div>
          <div>
              <label>Password:</label>
              <input
               type="password"
               name="password"
               placeholder="Password"
               value={this.state.password}
               onChange={this.handleUserInput.bind(this)}
               className={`labelForm ${!this.state.passwordValid ? 'labelFormError' : ''}`}
              />
          </div>
          <div>
              <input
               type="submit"
               disabled={!this.state.formValid}
               value="Log In"
              />
          </div>
      </form>
    )
  }
}

export default Form;
