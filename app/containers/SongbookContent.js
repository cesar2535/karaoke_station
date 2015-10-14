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

  renderSongsContent() {
    return (
      <section className={`Page-main`}>
        <h1></h1>
        <div className={`Songbook Songbook--w620`}>
          <div className={`Songbook-head`}>
            <div>歌名</div>
            <div>演唱者</div>
          </div>
          <List className={`List--song Songbook-body`} />
        </div>
      </section>
    );
  }

  renderArtistsContent() {
    return (
      <section className={`Page-main`}>
        <h1></h1>
        <div className={`Songbook`}>
          <List className={`List--artist Songbook-body`} />
        </div>
      </section>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const { query } = ownProps.location;
  const { type } = ownProps.params;

  return {
    ...query,
    type
  };
}

export default connect(mapStateToProps)(SongbookContent);
