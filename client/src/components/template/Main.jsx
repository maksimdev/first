import React, { Component } from 'react';

export default class Main extends Component {
  render() {
    return (
      <div id="main">
          {this.props.children}
      </div>
    )
  }
}
