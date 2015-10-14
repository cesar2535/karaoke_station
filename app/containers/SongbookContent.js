import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import List from '../components/List';
import Filter from '../components/Filter';
import Pager from '../components/Pager';

class SongbookContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`Page-content`}>
        <Filter />
        <Pager />
      </div>
    )
  }

  renderContent() {
    const { stroke } = this.props;

    if (!stroke) {
      return;
    }
  }
}

function mapStateToProps(state, ownProps) {
  const { stroke } = ownProps.location.query;
  return {
    stroke
  };
}

export default connect(mapStateToProps)(SongbookContent);
