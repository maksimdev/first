import React, { Component } from 'react';
import './App.css';

import { Provider } from "react-redux"
import store from "./Store"
import { Router, Route, hashHistory, IndexRoute } from "react-router"
import { syncHistoryWithStore } from "react-router-redux"

import Template from "./components/template/Template"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Ask from "./components/pages/Ask"

const history = syncHistoryWithStore(hashHistory, store)

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Template}>
                <IndexRoute component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/ask" component={Ask}/>
            </Route>
        </Router>
    </Provider>
    );
  }
}

export default App;
