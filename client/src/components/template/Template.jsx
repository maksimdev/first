import React, { Component } from "react"
import { connect } from "react-redux"

import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"

class App extends Component {
    render() {
      return (
        <div>
          <Header />
            <Main>
              <section>
                {this.props.children}
              </section>
            </Main>
          <Footer />
        </div>
      )
    }
}

export default connect(
    state => ({
        testStore: state
    }),
    dispatch => ({})
)(App)
