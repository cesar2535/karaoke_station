import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import moment from 'moment';

import { ROOT } from '../constants/Config';
import { loadPlaylist, loadHistory } from '../actions/playlist';
import { loadListFromFavorite } from '../actions/favorite';

import Slider from '../components/Slider';
import List from '../components/List';
import ActionPanel from '../components/ActionPanel';

function loadData(props) {
  props.loadListFromFavorite();
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
        <List className={`List--favorites`}
              items={listInFavorites.slice(0, 8)}
              renderItem={this.renderListInFavorites.bind(this)}
              isFetching={favoritesInfo.isFetching} />
      </section>
    );
  }

  renderListInFavorites(item, index) {
    return (
      <Link className={`Favorites Favorites--bgImage${index % 8 + 1}`} to={`${ROOT}/favorite`} query={{ favorId: item.id, favorName: item.name }}>
        <span>{item.name}</span>
        <div className={`Favorites-divider`}></div>
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
              items={songsInQueue.slice(0, 7)}
              renderItem={this.renderSongInQueue.bind(this)}
              isFetching={queueInfo.isFetching} />
        <Link className={`Queue-more`} to={`${ROOT}/playlist`} query={{ list: 'current' }}>More</Link>
      </section>
    );
  }

  renderSongInQueue(item, index) {
    return (
      <div key={index} className={`Song Song--queue`} onClick={this.toggleActionPanel.bind(this)}>
        <div className={`Song-info`}>
          <span className={`Song-title`}>{item.name}</span>
          <span className={`Song-artist`}>{item.artist}</span>
        </div>
        <ActionPanel data={{ songId: item.id }} isInQueue={true} />
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
              items={songsInHistory.slice(0, 7)}
              renderItem={this.renderSongInHistory.bind(this)}
              isFetching={historyInfo.isFetching} />
        <Link className={`History-more`} to={`${ROOT}/history`}>More</Link>
      </section>
    );
  }

  renderSongInHistory(item, index) {
    return (
      <div key={index} className={`Song Song--history`} onClick={this.toggleActionPanel.bind(this)}>
        <div className={`Song-info`}>
          <span className={`Song-title`}>{item.name}</span>
          <span className={`Song-artist`}>{item.artist}</span>
          <span className={`Song-time`}>{moment.unix(item.date).format('YYYY/MM/DD HH:mm')}</span>
        </div>
        <ActionPanel data={{ songId: item.id }} />
      </div>
    );
  }

  toggleActionPanel(evt) {
    evt.currentTarget.classList.toggle('is-expanded');
    evt.currentTarget.classList.toggle('is-selected');
  }
}

function mapStateToProps(state, ownProps) {
  const {
    pagination: { songsFromPlaylist, listsElse },
    entities: { songsByDate , songsByOrder, lists }
  } = state;

  const favoritesInfo = listsElse['favorite'] || { ids: [] };
  const listInFavorites = favoritesInfo.ids.map(id => lists[id]);
  const queueInfo = songsFromPlaylist['current'] || { ids: [], page: 0 };
  const songsInQueue = queueInfo.ids.map(id => songsByOrder[id]);
  const historyInfo = songsFromPlaylist['history'] || { ids: [], page: 0 };
  const songsInHistory = historyInfo.ids.map(id => songsByDate[id]);

  return {
    favoritesInfo,
    listInFavorites,
    queueInfo,
    historyInfo,
    songsInQueue,
    songsInHistory
  };
}

export default connect(mapStateToProps, { loadPlaylist, loadHistory, loadListFromFavorite })(HomePage);
