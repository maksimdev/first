import React, { Component } from 'react';
import axios from 'axios';
import ItemList from './ItemList';

//Available services from server side
class ItemListContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
        items: []
    }
  }
  componentDidMount() {
    this.getData('/api/all');
  }

  getData(url) {
    this.setState({ isLoading: true });
    axios.get(url)
    .then((response) => {
        if (response.status !== 200) {
            throw Error(response.statusText);
        }
        this.setState({ isLoading: false });
        return response.data;
    })
    .then((items) => this.setState({ items: items }))
    .catch(() => this.setState({ hasErrored: true }));
  }

    render() {
        if (this.state.hasErrored) { //error with access or route!
            return <p>Access denied, please log in!</p>;
        }
        if (this.state.isLoading) {
            return <p>Loading…</p>;
        }
        if (this.state.items.length === 0) {
            return <p>No current records!</p>;
        }
        return (
          <ItemList items={this.state.items} />
        );
    }
}

export default ItemListContainer;
