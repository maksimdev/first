import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../../Store';
import ServiceList from './ServiceList';
import axios from 'axios';
import { hashHistory } from "react-router";

class ServiceListContainer extends Component {
  componentDidMount() {
    // axios.get('/api/appointment').then(response => {
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

  enroll(date, service, id) {
    window.confirm(`Do you want to make an appointment at "${service}:${date.toISOString()}"?`) ?
    axios.post('/api/createservice', {date: date, service: service, uniq_key: date.toISOString()+service}).then(response => {
      hashHistory.push('/schedule');
    }).catch((err) => {
      if(err.message === "Request failed with status code 500") {
        window.alert(`${service}: Already exist!`)
      }
      if(err.message === "Request failed with status code 401") {
        window.alert(`Please login!`)
      }
    }) : null;
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
