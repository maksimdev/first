import React, { Component } from 'react';
import Form from '../components/forms/Form.js';

export default class Registration extends Component {
  render() {
    return (
      <div>
        <h3>Registration page</h3>
        <Form action="register" method="post" buttonText="Create me!" />
      </div>
    )
  }
}
