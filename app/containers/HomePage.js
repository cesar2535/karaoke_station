import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { FAKE_FAVORITES_LISTS } from '../constants/FakeData';
import List from '../components/utils/List';
import Playlist from '../components/Playlist';

import { loadPlaylist } from '../actions/playlist';
import { transitionSilde } from '../actions';

function loadData(props) {
  props.loadPlaylist('current');
}

class HomePage extends Component {
  static propTypes = {

  }

  static defaultProps = {

  }

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    loadData(this.props);
  }

  render() {
    const { page = 0, transitionSilde } = this.props;
    const view = [
      <div className="Main-wrapper Main-wrapper--home">
        {this._renderFavoritesCollection()}
        {this._renderSongbook()}
      </div>,
      <div className="Main-wrapper Main-wrapper--home">
        {this._renderPlaylist()}
      </div>
    ];

    return (
      <section className="Main Main--home">
        <div className="Main-prev ic btn_page_previous" style={{ display: page - 1 < 0 ? 'none' : 'block' }} onClick={evt => page - 1 < 0 ? 0 : transitionSilde(page - 1)}></div>
        <div className="Main-next ic btn_page_next" style={{ display: page + 1 >= view.length ? 'none' : 'block' }} onClick={evt => page + 1 >= view.length ? view.length - 1 : transitionSilde(page + 1)}></div>
        {view[page]}
        <div className="Main-nav">
          {view.map((item, index) => <div style={{ backgroundColor: index === page ? '#e7007f' : 'transparent' }} onClick={evt => transitionSilde(index)}></div>)}
        </div>
      </section>
    );
  }

  _renderFavoritesCollection() {
    const { favorites } = this.props;
    return (
      <div className="Main-wrapper-favorites">
        <h1>
          <span className="ic ic_menu_favoraite" />
          最愛歌曲
        </h1>
        <List className={`FavoritesCollection`}
              renderItem={this._renderFavoritesList.bind(this)}
              items={favorites} />
      </div>
    );
  }

  _renderFavoritesList(list, index, array) {
    if (index === array.length - 1) {
      return (
        <div key={list.title} className="FavoritesCollection-item" style={{ backgroundColor: "rgba(0,0,0,0.2)"}}>
          <span className="FavoritesCollection-item-title">{list.title}</span>
        </div>
      );
    }

    return (
      <div key={list.title} className="FavoritesCollection-item" style={{ backgroundImage: `url(${list.background})`}}>
        <span className="FavoritesCollection-item-title">{list.title}</span>
        <div className="FavoritesCollection-item-divider" />
        <span className="FavoritesCollection-item-count">{`${list.songCount} songs`}</span>
      </div>
    );
  }

  _renderPlaylist() {
    const { queue, songsInQueue } = this.props;
    return (
      <div className="Main-wrapper-playlist">
        <h1>
          <span className="ic ic_menu_requestinglist" />
          <Link className="" to={`/playlist/current`}>點歌清單</Link>
        </h1>
        <Playlist className="Playlist--home" songs={queue} isFetching={songsInQueue.isFetching || false} />
      </div>
    )
  }

  _renderSongbook() {
    return (
      <div className="Main-wrapper-songbook">
        <h1>
          <span className="ic ic_menu_reguestbook" />
          點歌本
        </h1>
        <div className="SongbookNav">
          <div className="SongbookNav-item" style={{ backgroundImage: `url(../assets/images/img_songbook_cover01.png)`}}>
            <span className="SongbookNav-item-title">依歌星點歌</span>
          </div>
          <div className="SongbookNav-item" style={{ backgroundImage: `url(../assets/images/img_songbook_cover02.png)`}}>
            <span className="SongbookNav-item-title">依語言點歌</span>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {

  const {
    pagination: { playlist },
    entities: { songs },
    slide
  } = state;

  const songsInQueue = playlist['current'] || { ids: [] };
  const queue = songsInQueue.ids.map(id => songs[id]);

  return {
    queue,
    songsInQueue,
    page: slide,
    favorites: FAKE_FAVORITES_LISTS
  };
}

export default connect(mapStateToProps, { loadPlaylist, transitionSilde })(HomePage);
