import React, { Component } from 'react';
import axios from 'axios';

class Button extends Component {
  constructor(props) {
     super(props);
     this.state = {
        name: 'Logout',
        action: this.action.bind(this)
     };
  };

  action() {
    axios.get('/logout').then(response => {
      this.setState({name: response.data});
    });
  }

  render() {
    return(
      <button onClick = {this.state.action}>{this.state.name}</button>
    )
  }
}

export default Button;
