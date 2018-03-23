import React, { Component } from 'react';

class Main extends Component {
  render() {
    return (
      <div>
        <h3>Main</h3>
        <p>main here begin</p>
          {this.props.children}
        <p>main here end</p>
      </div>
    )
  }
}

export default Main
