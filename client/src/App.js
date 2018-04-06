import React, { Component } from 'react';
import './App.css';

import { Provider } from "react-redux"
import store from "./Store"
import { Router, Route, hashHistory, IndexRoute } from "react-router"
import { syncHistoryWithStore } from "react-router-redux"

import Template from "./components/template/Template"
import Home from "./components/pages/Home"
import Registration from "./components/pages/Registration"
import Appointment from "./components/pages/Appointment"
import Schedule from "./components/pages/Schedule"
import Login from "./components/pages/Login"

import "./assets/css/main.css"

const history = syncHistoryWithStore(hashHistory, store)

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Template}>
                <IndexRoute component={Home}/>
                <Route path="/appointment" component={Appointment}/>
                <Route path="/schedule" component={Schedule}/>
                <Route path="/Login" component={Login}/>
                <Route path="/registration" component={Registration}/>
            </Route>
        </Router>
    </Provider>
    );
  }
}
