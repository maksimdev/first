import React, { Component } from 'react';
import ServiceListContainer from '../components/servicelist/ServiceListContainer';

export default class Appointment extends Component {
  render() {
    return (
      <div>
        <h3>Make an appointment.</h3>
        <p>Available records:</p>
        <ServiceListContainer />
      </div>
    )
  }
}
