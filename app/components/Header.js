import React, { Component, PropTypes } from 'react';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="Header">
        <div className="Header-left"></div>
        <div className="Header-right"></div>
      </header>
    );
  }
}
