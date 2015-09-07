import React, { Component, PropTypes } from 'react';

export default class PlaylistItem extends Component {
  static propTypes = {
    className: PropTypes.string
  }

  static defaultProp = {

  }

  constructor(props) {
    super(props);
  }

  render() {
    const { className } = this.props;
    return (
      <div className={className}>
      </div>
    );
  }
}
