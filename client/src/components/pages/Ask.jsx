import React, { Component } from 'react';
import ServiceListContainer from '../components/servicelist/ServiceListContainer';

class Ask extends Component {
  render() {
    return (
      <div>
        <h3>Ask</h3>
        <p>GET DATA FROM SERVICE API</p>
        <ServiceListContainer />
      </div>
    )
  }
}

export default Ask
