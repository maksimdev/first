import React, { Component } from 'react';
import './App.css';

import { Provider } from "react-redux"
import store from "./Store"
import { Router, Route, hashHistory, IndexRoute } from "react-router"
import { syncHistoryWithStore } from "react-router-redux"

import Template from "./components/template/Template"
import Home from "./components/pages/Home"
import Authorization from "./components/pages/Authorization"
import Ask from "./components/pages/Ask"

const history = syncHistoryWithStore(hashHistory, store)

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Template}>
                <IndexRoute component={Home}/>
                <Route path="/authorization" component={Authorization}/>
                <Route path="/ask" component={Ask}/>
            </Route>
        </Router>
    </Provider>
    );
  }
}

export default App;
