import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ClassNames from 'classnames';

class SlidePanel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`SlidePanel`}>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {

  };
}

export default connect(mapStateToProps)(SlidePanel);
