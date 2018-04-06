import React, { Component } from 'react';
import ItemListContainer from '../components/itemlist/ItemListContainer';

export default class Schedule extends Component {
  render() {
    return (
      <div>
        <h3>My schedule</h3>
        <ItemListContainer />
      </div>
    )
  }
}
