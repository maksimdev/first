import React, { Component } from 'react';
import Form from '../components/forms/Form.js';
import LogoutButton from '../components/buttons/LogoutButton.js';

export default class Login extends Component {
  render() {
    return (
      <div>
        <h3>Authorization page</h3>
        <Form action="login" method="post" buttonText="Login" />
        <LogoutButton />
      </div>
    )
  }
}
