import React, { Component } from 'react';
import ServiceListContainer from '../components/servicelist/ServiceListContainer';

class Appointment extends Component {
  render() {
    return (
      <div>
        <h3>Make an appointment.</h3>
        <p>Current records.</p>
        <ServiceListContainer />
      </div>
    )
  }
}

export default Appointment
