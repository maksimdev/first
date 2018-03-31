import React, { Component } from 'react';
import axios from 'axios';

class ItemList extends Component {
  constructor(props) {
    super(props)
    this.state = {
        items: []
    }
  }
  componentDidMount() {
    this.getData('/api/all');  // /api/all without auth
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
        return (
            <ul>
              {this.state.items.map(
                (item) => (<li key={item.id}>{item.label}</li>)
              )}
            </ul>
        );
    }
}

export default ItemList;
