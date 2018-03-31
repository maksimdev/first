import React, { Component } from 'react';
import Form from '../components/forms/Form.js';
import LogoutButton from '../components/buttons/LogoutButton.js';

class Authorization extends Component {
  render() {
    return (
      <div>
        <h3>Authorization PAGE</h3>
        <h4>Log in</h4>
        <Form action="login" method="post" buttonText="Log in" />
        <h4>Create login</h4>
        <Form action="register" method="post" buttonText="Create me!" />
        <LogoutButton />
      </div>
    )
  }
}

export default Authorization
