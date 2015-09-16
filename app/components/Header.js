import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="Header">
        <div className="Header-left">
          <Link className="Header-logo" to="/">
            <b>KTV</b>
            <span>Station</span>
          </Link>
        </div>
        <div className="Header-right"></div>
      </header>
    );
  }
}
