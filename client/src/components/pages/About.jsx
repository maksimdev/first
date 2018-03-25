import React, { Component } from 'react';
import Form from '../components/forms/Form.js';

class About extends Component {
  render() {
    return (
      <div>
        <h3>About</h3>
        <Form action="login" method="post" />
      </div>
    )
  }
}

export default About
