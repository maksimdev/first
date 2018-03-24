import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div>
        <h3>About</h3>
        <form action="/login" method="post">
            <div>
                <label>Username:</label>
                <input type="text" name="username"/>
            </div>
            <div>
                <label>Password:</label>
                <input type="password" name="password"/>
            </div>
            <div>
                <input type="submit" value="Log In"/>
            </div>
        </form>
      </div>
    )
  }
}

export default About
