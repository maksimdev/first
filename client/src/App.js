import React, { Component } from 'react';
import './App.css';

import { Provider } from "react-redux"
import { createStore } from "redux"
import { Router, Route, hashHistory, IndexRoute } from "react-router"
import { syncHistoryWithStore } from "react-router-redux"

import Template from "./components/template/Template"
import Home from "./components/pages/Home"
import About from "./components/pages/About"

import reducer from "./reducers"

const store = createStore(reducer)
const history = syncHistoryWithStore(hashHistory, store)

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
            <Route exact path="/" component={Template}>
                <Route path="/home" component={Home}/>
                <Route path="/about" component={About}/>
            </Route>
        </Router>
    </Provider>
    );
  }
}

export default App;
