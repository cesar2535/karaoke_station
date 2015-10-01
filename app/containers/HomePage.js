import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class HomePage extends Component {
  render() {
    return (
      <div className={`Page Page--home`}>
        <div className={`Slide`}>
          
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {

  };
}

export default connect(mapStateToProps)(HomePage);
