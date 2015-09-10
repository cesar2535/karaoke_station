import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { FAKE_PLAYLIST, FAKE_FAVORITES_LISTS } from '../constants/FakeData';
import List from '../components/utils/List';
import Playlist from '../components/Playlist';

class HomePage extends Component {
  static propTypes = {

  }

  static defaultProps = {

  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="Main Main--home">
        <div className="Main-wrapper Main-wrapper--home">
          {this._renderFavoritesCollection()}
          {this._renderPlaylist()}
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
    const { playlist } = this.props;
    return (
      <div className="Main-wrapper-playlist">
        <h1>
          <span className="ic ic_menu_requestinglist" />
          點歌清單
        </h1>
        <Playlist className="Playlist--home" songs={playlist} />
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    playlist: FAKE_PLAYLIST,
    favorites: FAKE_FAVORITES_LISTS
  };
}

export default connect(mapStateToProps)(HomePage);
