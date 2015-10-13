import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { ROOT } from '../constants/Config';

import List from '../components/List';
import SideNav from '../components/SideNav';
import Filter from '../components/Filter';
import Pager from '../components/Pager';

import { loadPlaylist } from '../actions/playlist';

function loadData(props) {
  props.loadPlaylist('current');
  props.loadPlaylist('finished');
}

class PlaylistPage extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    loadData(this.props);
  }

  render() {
    const { query } = this.props.location;
    const { queue, finished } = this.props;

    return (
      <div className={`Page Page--playlist`}>
        <SideNav />
        {this.renderTabs(queue, finished)}
        {this.renderContent(query, this.props)}
      </div>
    );
  }

  renderTabs(queue, finished) {
    return (
      <div className={`SideTab`}>
        <Link className={`SideTab-link`} to={`${ROOT}/playlist`} query={{ list: `current` }} activeClassName={`is-current`}>
          {`待播清單 (${queue.length})`}
        </Link>
        <Link className={`SideTab-link`} to={`${ROOT}/playlist`} query={{ list: `finished` }} activeClassName={`is-current`}>
          {`已播清單 (${finished.length})`}
        </Link>
      </div>
    );
  }

  renderContent(query, props) {
    const { queue, finished, songsByQueue, songsByFinished, history } = props;

    switch (query.list) {
      case 'current':
        return (
          <div className={`Page-content`}>
            <Filter />
            <section className={`Page-main`}>
              <h1>{`待播清單`}</h1>
              <div className={`Queue Queue--playlist`}>
                <div className={`Queue-head`}>
                  <div>歌名</div>
                  <div>演唱者</div>
                </div>
                <List className={`List--queue Queue-body`}
                      items={queue}
                      renderItem={this.renderListItem.bind(this)}
                      isFetching={songsByQueue.isFetching} />
              </div>
            </section>
            <Pager />
          </div>
        );
      case 'finished':
        return (
          <div className={`Page-content`}>
            <Filter />
            <section className={`Page-main`}>
              <h1>{`已播清單`}</h1>
              <div className={`Queue Queue--playlist`}>
                <div className={`Queue-head`}>
                  <div>歌名</div>
                  <div>演唱者</div>
                </div>
                <List className={`List--queue Queue-body`}
                      items={finished}
                      renderItem={this.renderListItem.bind(this)}
                      isFetching={songsByFinished.isFetching} />
              </div>
            </section>
            <Pager />
          </div>
        );
      default:
        history.replaceState({}, `/playlist?list=current`);
    }
  }

  renderListItem(item, index) {
    return (
      <div key={index} className={`Song`}>
        <span className={``}>{item.name}</span>
        <span className={``}>{item.artist}</span>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const {
    pagination: { songsFromPlaylist },
    entities: { songsInPlaylist }
  } = state;

  const songsByQueue = songsFromPlaylist['current'] || { ids: [], page: 0 };
  const songsByFinished = songsFromPlaylist['finished'] || { ids: [], page: 0 };
  const queue = songsByQueue.ids.map(id => songsInPlaylist[id]);
  const finished = songsByFinished.ids.map(id => songsInPlaylist[id]);

  return {
    songsByQueue,
    songsByFinished,
    queue,
    finished
  };
}

export default connect(mapStateToProps, { loadPlaylist })(PlaylistPage);
