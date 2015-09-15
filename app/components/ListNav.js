import React, { Component, PropTypes } from 'react';
import ClassNames from 'classnames';

export default class ListNav extends Component {
  render() {
    const { className } = this.props;
    const classNames = className === 'ListNav' ? className : ClassNames('ListNav', className);

    return (
      <div className={classNames}>
        <a href="#">
          <span className="ic ic_toolbar_sort_default_disable"></span>
          <span className="ic ic_topbar_triangle_normal TopBar"></span>
        </a>
      </div>
    );
  }
}
