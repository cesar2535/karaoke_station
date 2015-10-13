import React, { Component, PropTypes } from 'react';
import ClassNames from 'classnames';

class Pager extends Component {
  static propTypes = {
    currentLen: PropTypes.number.isRequired,
    totalLen: PropTypes.number.isRequired
  }

  static defaultProps = {
    currentLen: 0,
    totalLen: 0
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { className, currentLen, totalLen } = this.props;

    const classes = ClassNames(`Pager`, className);

    return (
      <div className={classes}>
        <div className={`Pager-left`}>
        </div>
        <div className={`Pager-right`}>
          <span>{`Current: ${currentLen}`}</span>
          <span>{`Total: ${totalLen}`}</span>
        </div>
      </div>
    );
  }
}

export default Pager;
