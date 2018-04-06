import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>Cookie Monster home page</h3>
        <iframe title="movie" width="640" height="480"
            src="https://www.youtube.com/embed/MF6OYq_2Ooc">
        </iframe>
      </div>
    )
  }
}
