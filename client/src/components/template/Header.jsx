import React, { Component } from 'react';
import { Link } from "react-router"
import logo from '../../cookie.png';

export default class Header extends Component {
    render() {
        return (
            <header id="header">
                <Top />
                <Bottom />
            </header>
        )
    }
}

class Top extends Component {
    render() {
        return (
            <div className="top">
                <Logo />
                <Nav />
            </div>
        )
    }
}

class Logo extends Component {
    render() {
        return (
          <div id="logo">
              <span className="image avatar48">
                  <img src={logo} className="App-logo" alt="logo" />
              </span>
              <h1 id="title">COOKIE</h1>
              <p>Cookie Monster's company</p>
          </div>
        )
    }
}

class Nav extends Component {
    render() {
        return (
            <nav id="nav">
                <ul>
                    <li><Link to="/" className="skel-layers-ignoreHref"><span className="icon fa-home">Home</span></Link></li>
                    <li><Link to="/appointment" className="skel-layers-ignoreHref"><span className="icon fa-th">Appointment</span></Link></li>
                    <li><Link to="/schedule" className="skel-layers-ignoreHref"><span className="icon fa-book">Schedule</span></Link></li>
                    <li><Link to="/login" className="skel-layers-ignoreHref"><span className="icon fa-user">Login/Logout</span></Link></li>
                    <li><Link to="/registration" className="skel-layers-ignoreHref"><span className="icon fa-pencil">Registration</span></Link></li>
                </ul>
            </nav>
        )
    }
}

class Bottom extends Component {
    render() {
        return (
            <div className="bottom">
                <ul className="icons">
                    <li><Link to="#" className="icon fa-twitter">
                        <span className="label">Twitter</span></Link></li>
                    <li><Link to="#" className="icon fa-facebook">
                        <span className="label">Facebook</span></Link></li>
                    <li><a href="https://github.com/maksimdev/first" className="icon fa-github">
                        <span className="label">Github</span></a></li>
                    <li><Link to="#" className="icon fa-dribbble">
                        <span className="label">Dribbble</span></Link></li>
                    <li><Link to="#" className="icon fa-envelope">
                        <span className="label">Email</span></Link></li>
                </ul>
            </div>
        )
    }
}
