import React, { Component } from 'react';
import Form from '../components/forms/Form.js';
import Button from '../components/buttons/Button.js';

class Authorization extends Component {
  render() {
    return (
      <div>
        <h3>Authorization PAGE</h3>
        <h4>Log in</h4>
        <Form action="login" method="post" />
        <h4>Create login</h4>
        <Form action="register" method="post" />
        <Button />
      </div>
    )
  }
}

export default Authorization
