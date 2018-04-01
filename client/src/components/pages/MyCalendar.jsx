import React, { Component } from 'react';
import ServiceListContainer from '../components/servicelist/ServiceListContainer';

class MyCalendar extends Component {
  render() {
    return (
      <div>
        <h3>MyCalendar</h3>
        <p>Current records.</p>
        <ServiceListContainer />
      </div>
    )
  }
}

export default MyCalendar
