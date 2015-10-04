import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Slider from '../components/Slider';

class HomePage extends Component {
  render() {
    return (
      <div className={`Page Page--home`}>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {

  };
}

export default connect(mapStateToProps)(HomePage);
