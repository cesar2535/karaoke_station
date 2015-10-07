import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { ROOT } from '../constants/Config';
import { loadPlaylist } from '../actions/playlist';

import Slider from '../components/Slider';
import List from '../components/List';

class HomePage extends Component {

  componentWillMount() {

  }

  render() {
    const {
      queue, queueState,
      favorites, favoritesState,
      historyList, historyListState
    } = this.props;

    return (
      <div className={`Page Page--home`}>
        <Slider>
          {this.renderFavorites(favorites, favoritesState)}
          {this.renderSongBook()}
          {this.renderQueue(queue, queueState)}
          {this.renderHistory(historyList, historyListState)}
        </Slider>
      </div>
    )
  }

  renderFavorites(favorites = [], favoritesState = {}) {
    return (
      <section className={`Favorites`}>
        <h1>
          <span className={`ic ic_menu_favorite`} />
          <Link className={``} to={`${ROOT}/favorite`}>最愛歌曲</Link>
        </h1>
        <List className={`List--favorite`}
              items={favorites.slice(0, 8)}
              renderItem={this.renderListInFavorites.bind(this)}
              isFetching={favoritesState.isFetching} />
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
          <Link className={``} to={`${ROOT}/songbook/category/male`}>
            <h2>依歌星找歌</h2>
          </Link>
          <Link className={``} to={`${ROOT}/songbook/lang/Mandarin`}>
            <h2>依語言找歌</h2>
          </Link>
        </div>
      </section>
    );
  }

  renderQueue(queue = [], queueState = {}) {
    return (
      <section className={`Queue`}>
        <h1>
          <span className={`ic ic_menu_requestinglist`} />
          <Link className={``} to={`${ROOT}/playlist/current`}>點歌清單</Link>
        </h1>
        <List className={`List--queue`}
              items={queue.slice(0, 8)}
              renderItem={this.renderSongInQueue.bind(this)}
              isFetching={queueState.isFetching} />
        <Link to={`${ROOT}/playlist/current`}>More</Link>
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

  renderHistory(historyList = [], historyListState = {}) {
    return (
      <section className={`History`}>
        <h1>
          <span className={`ic ic_menu_history`} />
          <Link className={``} to={`${ROOT}/history`}>歷史紀錄</Link>
        </h1>
        <List className={`List--history`}
              items={historyList.slice(0, 8)}
              renderItem={this.renderSongInHistory.bind(this)}
              isFetching={historyListState.isFetching} />
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
  return {

  };
}

export default connect(mapStateToProps, { loadPlaylist })(HomePage);
