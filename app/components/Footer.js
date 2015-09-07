import React, { Component, PropTypes } from 'react';

export default class Footer extends Component {
  static propTypes = {

  }

  static defaultProps = {

  }

  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;
    return (
      <footer className="Footer">
        {children}
      </footer>
    )
  }
}
