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
    const { songsInQueue, songsInFinished, queueInfo, finishedInfo } = this.props;

    return (
      <div className={`Page Page--playlist`}>
        <SideNav />
        {this.renderTabs(songsInQueue, songsInFinished, queueInfo, finishedInfo)}
        {this.renderContent(query, this.props)}
      </div>
    );
  }

  renderTabs(songsInQueue, songsInFinished, queueInfo, finishedInfo) {
    return (
      <div className={`SideTab`}>
        <Link className={`SideTab-link`} to={`${ROOT}/playlist`} query={{ list: `current` }} activeClassName={`is-current`}>
          {`待播清單 (${queueInfo.total})`}
        </Link>
        <Link className={`SideTab-link`} to={`${ROOT}/playlist`} query={{ list: `finished` }} activeClassName={`is-current`}>
          {`已播清單 (${finishedInfo.total})`}
        </Link>
      </div>
    );
  }

  renderContent(query, props) {
    const { songsInQueue, songsInFinished, queueInfo, finishedInfo, history } = props;

    switch (query.list) {
      case 'current':
        return (
          <div className={`Page-content`}>
            <Filter />
            <section className={`Page-main`}>
              <h1>{`待播清單`}</h1>
              <div className={`Queue Queue--w620`}>
                <div className={`Queue-head`}>
                  <div>歌名</div>
                  <div>演唱者</div>
                </div>
                <List className={`List--queue Queue-body`}
                      items={songsInQueue}
                      renderItem={this.renderListItem.bind(this)}
                      isFetching={queueInfo.isFetching}
                      onLoadMore={this.loadQueue.bind(this)} />
              </div>
            </section>
            <Pager currentLen={songsInQueue.length} totalLen={queueInfo.total} />
          </div>
        );
      case 'finished':
        return (
          <div className={`Page-content`}>
            <Filter />
            <section className={`Page-main`}>
              <h1>{`已播清單`}</h1>
              <div className={`Queue Queue--w620`}>
                <div className={`Queue-head`}>
                  <div>歌名</div>
                  <div>演唱者</div>
                </div>
                <List className={`List--queue Queue-body`}
                      items={songsInFinished}
                      renderItem={this.renderListItem.bind(this)}
                      isFetching={finishedInfo.isFetching}
                      onLoadMore={this.loadFinished.bind(this)} />
              </div>
            </section>
            <Pager currentLen={songsInFinished.length} totalLen={finishedInfo.total} />
          </div>
        );
      default:
        return (
          <div className={`Page-content`}>
            <h2>{`\u21D0 Select a label`}</h2>
          </div>
        );
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
    const { songsInQueue, queueInfo, loadPlaylist } = this.props;
    if ( songsInQueue.length >= queueInfo.total ) {
      return ;
    }

    loadPlaylist('current', queueInfo.page + 1);
  }

  loadFinished() {
    const { songsInFinished, finishedInfo, loadPlaylist } = this.props;
    if ( songsInFinished.length >= finishedInfo.total ) {
      return ;
    }

    loadPlaylist('finished', finishedInfo.page + 1);
  }
}

function mapStateToProps(state, ownProps) {
  const {
    pagination: { songsFromPlaylist },
    entities: { songsByOrder, songsByDate }
  } = state;

  const queueInfo = songsFromPlaylist['current'] || { ids: [], page: 0 };
  const finishedInfo = songsFromPlaylist['finished'] || { ids: [], page: 0 };
  const songsInQueue = queueInfo.ids.map(id => songsByOrder[id]);
  const songsInFinished = finishedInfo.ids.map(id => songsByDate[id]);

  return {
    queueInfo,
    finishedInfo,
    songsInQueue,
    songsInFinished
  };
}

export default connect(mapStateToProps, { loadPlaylist })(PlaylistPage);
