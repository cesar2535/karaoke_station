import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { QTS_ROOT } from '../constants/Config';

import SideBar from '../components/SideBar';
import SideTab from '../components/SideTab';
import ListNav from '../components/ListNav';
import ListPager from '../components/ListPager';
import Playlist from '../components/Playlist';

import * as actions from '../actions/favorites';
import { addPrepareTodos } from '../actions/songslist';
import { ADD_BUTTOM, INSERT_BUTTOM, REMOVE_FAVORITE_BUTTOM } from '../constants/Config';

function loadData(props) {
  props.loadFavoriteLists();
}

class FavoritesPage extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    loadData(this.props);
  }

  render() {
    const { favoriteslist, songs, params, viewState, addPrepareTodos, prepareSongId } = this.props;
    const viewTitle = params.name;
    const viewList = songs;
    return (
      <section className="Main Main--playlist">
        <SideBar className="SideBar" />
        <SideTab className="SideTab" items={favoriteslist} renderItem={this._renderSideTabItem.bind(this)} />

        <div className="Main-wrapper Main-wrapper--playlist">
          <ListNav className='ListNav ListNav--playlist' />
          <h1 className="Main-wrapper-title">{viewTitle}</h1>
          <div className="PlaylistView">
            <div className="PlaylistView-head">
              <span>歌名</span>
              <span>演唱者</span>
            </div>
            <Playlist className="Playlist--playlist"
              songs={viewList}
              isFetching={viewState || false}
              addPrepareTodos={addPrepareTodos}
              prepareSongId={prepareSongId}
              ADD_BUTTOM={ADD_BUTTOM}
              INSERT_BUTTOM={INSERT_BUTTOM}
              REMOVE_FAVORITE_BUTTOM={REMOVE_FAVORITE_BUTTOM} />
          </div>
          <ListPager className="ListPager--playlist" total={viewList.length} />
        </div>

      </section>
    );
  }

  _renderSideTabItem(item, index) {
    const { loadFavorites } = this.props;
    return (
      <Link key={index} className="SideTab-listitem" to={`${QTS_ROOT}favorite/${item.name}`} activeClassName="is-current" onClick={ () => loadFavorites(item.name, item.id) }>
        <span>{`${item.name} (${item.nSongs})`}</span>
      </Link>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const {
    pagination: { favoritelist, favoritesongs },
    entities: { favorites, songs }
  } = state;
  const favoritelistIds = favoritelist['favoritelist'] || { ids: [] };
  const favoritelistDatas = favoritelistIds.ids.map(id => favorites[id]);
  const favoritesongIds = favoritesongs[ownProps.params.name] || { ids: [] };
  const favoritesongDatas = favoritesongIds.ids.map(id => songs[id]);
  return {
    favoriteslist: favoritelistDatas,
    prepareSongId: state.songslist.songId,
    songs: favoritesongDatas,
    viewState: favoritesongIds.isFetching

  };
}

export default connect(mapStateToProps, { ...actions, addPrepareTodos })(FavoritesPage);
