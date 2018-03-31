import React, { Component } from 'react';
import { Link } from "react-router"
import logo from '../../cookie.png';

class Header extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">COOKIE MONSTER'S COMPANY</h1>
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
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/authorization">Authorization</Link></li>
                    <li><Link to="/ask">Ask</Link></li>
                    <li><Link to="/schedule">Schedule</Link></li>
                </ul>
            </nav>
        )
    }
}

export default Header
