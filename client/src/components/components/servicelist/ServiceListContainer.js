import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../../Store';
import ServiceList from './ServiceList';
import axios from 'axios';

class ServiceListContainer extends Component {
  componentDidMount() {
    // axios.get('/api/services').then(response => {
    //   store.dispatch({
    //     type: 'SET_SERVICE_DATA',
    //     payload: response.data
    //   });
    // });
    store.dispatch({
        type: 'GET_SERVICE_DATA',
        payload: ''
    });
  }

  enroll(date, service) {
    axios.post('/api/createservice', {date: date, service: service}).then(response => {
      console.log(response)
    }).catch(() => {
      console.log('Error!')
    });
  }

  render() {
    return (
      <ServiceList services={this.props.services} enroll={this.enroll}/>
    )
  }
}

const mapStateToProps = function(store) {
  return {
    services: store.serviceState
  };
}

export default connect(mapStateToProps)(ServiceListContainer);
