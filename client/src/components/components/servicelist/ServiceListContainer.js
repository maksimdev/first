import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../../Store';
import ServiceList from './ServiceList';
//import axios from 'axios';


class ServiceListContainer extends Component {
  componentDidMount() {
    // axios.get('/api/services').then(response => {
    //   store.dispatch({
    //     type: 'GET_SERVICE_LIST',
    //     payload: response.data
    //   });
    // });
    store.dispatch({
        type: 'GET_SERVICE_DATA',
        payload: ''
    });
  }

  delete(id) {
    console.log(`Delete: ${id}`);
    store.dispatch({
        type: 'DELETE_SERVICE',
        payload: id
    });
  }

  render() {
    return (
      <ServiceList services={this.props.services} delete={this.delete}/>
    )
  }
}

const mapStateToProps = function(store) {
  return {
    services: store.serviceState
  };
}

export default connect(mapStateToProps)(ServiceListContainer);
