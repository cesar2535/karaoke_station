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
    const { queue, finished, songsInQueue, songsInFinished } = this.props;

    return (
      <div className={`Page Page--playlist`}>
        <SideNav />
        {this.renderTabs(queue, finished, songsInQueue, songsInFinished)}
        {this.renderContent(query, this.props)}
      </div>
    );
  }

  renderTabs(queue, finished, songsInQueue, songsInFinished) {
    return (
      <div className={`SideTab`}>
        <Link className={`SideTab-link`} to={`${ROOT}/playlist`} query={{ list: `current` }} activeClassName={`is-current`}>
          {`待播清單 (${songsInQueue.total})`}
        </Link>
        <Link className={`SideTab-link`} to={`${ROOT}/playlist`} query={{ list: `finished` }} activeClassName={`is-current`}>
          {`已播清單 (${songsInFinished.total})`}
        </Link>
      </div>
    );
  }

  renderContent(query, props) {
    const { queue, finished, songsInQueue, songsInFinished, history } = props;

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
                      isFetching={songsInQueue.isFetching}
                      onLoadMore={this.loadQueue.bind(this)} />
              </div>
            </section>
            <Pager currentLen={queue.length} totalLen={songsInQueue.total} />
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
                      isFetching={songsInFinished.isFetching}
                      onLoadMore={this.loadFinished.bind(this)} />
              </div>
            </section>
            <Pager currentLen={finished.length} totalLen={songsInFinished.total} />
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

  loadQueue() {
    const { queue, songsInQueue, loadPlaylist } = this.props;
    if ( queue.length >= songsInQueue.total ) {
      return ;
    }

    loadPlaylist('current', songsInQueue.page + 1);
  }

  loadFinished() {
    const { finished, songsInFinished, loadPlaylist } = this.props;
    if ( finished.length >= songsInFinished.total ) {
      return ;
    }

    loadPlaylist('finished', songsInFinished.page + 1);
  }
}

function mapStateToProps(state, ownProps) {
  const {
    pagination: { songsFromPlaylist },
    entities: { songsByOrder, songsByDate }
  } = state;

  const songsInQueue = songsFromPlaylist['current'] || { ids: [], page: 0 };
  const songsInFinished = songsFromPlaylist['finished'] || { ids: [], page: 0 };
  const queue = songsInQueue.ids.map(id => songsByOrder[id]);
  const finished = songsInFinished.ids.map(id => songsByDate[id]);

  return {
    songsInQueue,
    songsInFinished,
    queue,
    finished
  };
}

export default connect(mapStateToProps, { loadPlaylist })(PlaylistPage);
