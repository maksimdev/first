import React, { Component } from 'react';
import Form from '../components/forms/Form.js';

class About extends Component {
  render() {
    return (
      <div>
        <h3>About</h3>
        <h4>Log in</h4>
        <Form action="login" method="post" />
        <h4>Create login</h4>
        <Form action="createlogin" method="post" />
        <a href="/killme">KILLME</a>
      </div>
    )
  }
}

export default About
