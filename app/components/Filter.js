import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

class Filter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { className } = this.props;

    const ClassName = classnames(`Filter`, className);

    return (
      <div className={ClassName}>

      </div>
    );
  }
}

export default Filter;
