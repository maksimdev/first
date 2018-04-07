import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <article>
        <h3>Cookie Monster home page</h3>
        <div className="videoWrapper">
          <iframe title="movie" width="560px" height="349px"
              src="https://www.youtube.com/embed/MF6OYq_2Ooc">
          </iframe>
        </div>
      </article>
    )
  }
}
