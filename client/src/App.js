import React, { Component } from 'react';
import './App.css';

import { Provider } from "react-redux"
import store from "./Store"
import { Router, Route, hashHistory, IndexRoute } from "react-router"
import { syncHistoryWithStore } from "react-router-redux"

import Template from "./components/template/Template"
import Home from "./components/pages/Home"
import Authorization from "./components/pages/Authorization"
import Appointment from "./components/pages/Appointment"
import Schedule from "./components/pages/Schedule"

const history = syncHistoryWithStore(hashHistory, store)

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Template}>
                <IndexRoute component={Home}/>
                <Route path="/appointment" component={Appointment}/>
                <Route path="/schedule" component={Schedule}/>
                <Route path="/authorization" component={Authorization}/>
            </Route>
        </Router>
    </Provider>
    );
  }
}

export default App;
