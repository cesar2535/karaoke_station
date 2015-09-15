import React, { Component, PropTypes } from 'react';
import ClassNames from 'classnames';

export default class ListPager extends Component {
  render() {
    const { className, total } = this.props;
    const classes = className === 'ListPager' ? className : ClassNames('ListPager', className);
    return (
      <div className={classes}>Total: {total}</div>
    );
  }
}
