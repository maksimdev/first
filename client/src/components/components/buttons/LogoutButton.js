import React, { Component } from 'react';
import axios from 'axios';
import { hashHistory } from "react-router";

class LogoutButton extends Component {
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
      hashHistory.push('/');
    });
  }

  render() {
    return(
      <button onClick = {this.state.action}>{this.state.name}</button>
    )
  }
}

export default LogoutButton;
