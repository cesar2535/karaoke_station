import React, { Component, PropTypes } from 'react';
import ClassNames from 'classnames';

class Filter extends Component {
  constructor(props) {

  }

  render() {
    const { className } = this.props;

    const classes = ClassNames(`Filter`, className);

    return (
      <div className={classes}>

      </div>
    );
  }
}

export default Filter;
