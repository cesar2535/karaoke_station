import React, { Component, PropTypes } from 'react';
import ClassNames from 'classnames';

class Pager extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { className } = this.props;

    const classes = ClassNames(`Pager`, className);

    return (
      <div className={classes}>

      </div>
    );
  }
}

export default Pager;
