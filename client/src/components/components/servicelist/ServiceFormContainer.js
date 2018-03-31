import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../../Store';
import ServiceForm from './ServiceForm';

export default class ServiceListContainer extends Component {
  delete(name) {
    console.log(name);
  }

  render() {
    return (
      <ServiceForm delete={this.delete} />
    )
  }
}
