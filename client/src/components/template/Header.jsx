import React, { Component } from 'react';
import { Link } from "react-router"
import logo from '../../pizza.png';
//logo.svg';

class Header extends Component {
  /*state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };   {this.state.response}*/

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Header!!!</h1>
          <Nav />
        </header>
        <p className="App-intro">
        </p>
      </div>
    )
  }
}

class Nav extends Component {
    render() {
        return (
            <nav id="nav">
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
        )
    }
}

export default Header
