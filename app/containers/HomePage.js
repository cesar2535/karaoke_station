import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { ROOT } from '../constants/Config';
import { loadPlaylist, loadHistory } from '../actions/playlist';

import Slider from '../components/Slider';
import List from '../components/List';


function loadData(props) {
  props.loadPlaylist('current');
  props.loadPlaylist('finished');
  props.loadHistory();
}

class HomePage extends Component {

  componentWillMount() {
    loadData(this.props);
  }

  render() {
    const {
      songsInQueue, queueInfo,
      listInFavorites, favoritesInfo,
      songsInHistory, historyInfo
    } = this.props;

    return (
      <div className={`Page Page--home`}>
        <Slider>
          {this.renderFavorites(listInFavorites, favoritesInfo)}
          {this.renderSongBook()}
          {this.renderQueue(songsInQueue, queueInfo)}
          {this.renderHistory(songsInHistory, historyInfo)}
        </Slider>
      </div>
    )
  }

  renderFavorites(listInFavorites = [], favoritesInfo = {}) {
    return (
      <section className={`Favorite`}>
        <h1>
          <span className={`ic ic_menu_favorite`} />
          <Link className={``} to={`${ROOT}/favorite`}>最愛歌曲</Link>
        </h1>
        <List className={`List--favorite`}
              items={listInFavorites.slice(0, 8)}
              renderItem={this.renderListInFavorites.bind(this)}
              isFetching={favoritesInfo.isFetching} />
      </section>
    );
  }

  renderListInFavorites(item, index) {
    return (
      <Link className={``} to={`${ROOT}/favorite/${item.name}`}>
        <span>{item.name}</span>
        <div className={`divider`}></div>
        <span>{`${item.nSongs} ${item.nSongs === 1 ? 'song' : 'songs' }`}</span>
      </Link>
    );
  }

  renderSongBook() {
    return (
      <section className={`Songbook`}>
        <h1>
          <span className={`ic ic_menu_requestbook`} />
          <span className={``}>點歌本</span>
        </h1>
        <div className={``}>
          <Link className={``} to={`${ROOT}/songbook/artists`} query={{ type: `artist`, category: `male`}}>
            <h2>依歌星找歌</h2>
          </Link>
          <Link className={``} to={`${ROOT}/songbook/songs`} query={{ type: `lang`, category: `Mandarin`}}>
            <h2>依語言找歌</h2>
          </Link>
        </div>
      </section>
    );
  }

  renderQueue(songsInQueue = [], queueInfo = {}) {
    return (
      <section className={`Queue`}>
        <h1>
          <span className={`ic ic_menu_requestinglist`} />
          <Link className={``} to={`${ROOT}/playlist`} query={{ list: 'current' }}>點歌清單</Link>
        </h1>
        <List className={`List--queue`}
              items={songsInQueue.slice(0, 8)}
              renderItem={this.renderSongInQueue.bind(this)}
              isFetching={queueInfo.isFetching} />
        <Link className={`Queue-more`} to={`${ROOT}/playlist`} query={{ list: 'current' }}>More</Link>
      </section>
    );
  }

  renderSongInQueue(item, index) {
    return (
      <div key={index} className={`Song Song--queue`}>
        <span className={`Song-title`}>{item.name}</span>
        <span className={`Song-artist`}>{item.artist}</span>
      </div>
    );
  }

  renderHistory(songsInHistory = [], historyInfo = {}) {
    return (
      <section className={`History`}>
        <h1>
          <span className={`ic ic_menu_history`} />
          <Link className={``} to={`${ROOT}/history`}>歷史紀錄</Link>
        </h1>
        <List className={`List--history`}
              items={songsInHistory.slice(0, 8)}
              renderItem={this.renderSongInHistory.bind(this)}
              isFetching={historyInfo.isFetching} />
        <Link className={`History-more`} to={`${ROOT}/history`}>More</Link>
      </section>
    );
  }

  renderSongInHistory(item, index) {
    return (
      <div key={index} className={`Song Song--history`}>
        <span className={`Song-title`}>{item.name}</span>
        <span className={`Song-artist`}>{item.artist}</span>
        <span className={`Song-time`}>{item.date}</span>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const {
    pagination: { songsFromPlaylist },
    entities: { songsByDate , songsByOrder }
  } = state;

  const queueInfo = songsFromPlaylist['current'] || { ids: [], page: 0 };
  const songsInQueue = queueInfo.ids.map(id => songsByOrder[id]);
  const historyInfo = songsFromPlaylist['history'] || { ids: [], page: 0 };
  const songsInHistory = historyInfo.ids.map(id => songsByDate[id]);

  return {
    queueInfo,
    historyInfo,
    songsInQueue,
    songsInHistory
  };
}

export default connect(mapStateToProps, { loadPlaylist, loadHistory })(HomePage);
