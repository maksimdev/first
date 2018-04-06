import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div id="footer">
          <ul className="copyright">
              <li>&copy; Cookie Monster's company.</li><li>Developer Maksim Ashmetev: <a href="https://github.com/maksimdev/first">GITHUB</a></li>
          </ul>
      </div>
    )
  }
}
