import React, { Component } from 'react';
import axios from 'axios';
import ItemList from './ItemList';

export default class ItemListContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
        items: []
    }
  }
  componentDidMount() {
    this.getData('/api/myservices');
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

  undo(id, row) {
    axios.delete('/api/delete', {data: {"id": id}})
    .then((result) => {
      this.setState({items: [...this.state.items.slice(0, row),
                             ...this.state.items.slice(row + 1)]})
    })
    .catch(() => console.log('Error'));
  }

    render() {
        if (this.state.hasErrored) { //error with access or route!
            return <p>Access denied, please login!</p>;
        }
        if (this.state.isLoading) {
            return <p>Loading…</p>;
        }
        if (this.state.items.length === 0) {
            return <p>No current records!</p>;
        }
        return (<div>
          <ItemList items={this.state.items} undo={this.undo.bind(this)} />
          </div>
        );
    }
}
