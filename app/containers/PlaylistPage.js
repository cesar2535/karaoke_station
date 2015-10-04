import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class PlaylistPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`Page Page--playlist`}>
        
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {

  }
}

export default connect(mapStateToProps)(PlaylistPage);
