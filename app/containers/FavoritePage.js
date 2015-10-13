import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { ROOT } from '../constants/Config';

import List from '../components/List';
import SideNav from '../components/SideNav';
import Filter from '../components/Filter';
import Pager from '../components/Pager';

import { loadSongsFromFavorite, loadListFromFavorite } from '../actions/favorite';

function loadData(props) {
  props.loadListFromFavorite();
}

class FavoritePage extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { favorId } = this.props;
    loadData(this.props);
    if ( !favorId ) {
      return;
    }

    this.loadSongs(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.favorId !== this.props.favorId) {
      this.loadSongs(nextProps);
    }
  }

  render() {
    const { favorName, favoriteInfo, listsInFavorite, listInfo, songsInFavorite } = this.props;
    return (
      <div className={`Page Page--favorite`}>
        <SideNav />
        {this.renderTabs(listsInFavorite)}
        <div className={`Page-content`}>
          <Filter />
          <div className={`Page-main`}>
            <h1>{favorName}</h1>
            <div className={`Favorite Favorite--w620`}>
              <div className={`Favorite-head`}>
                <div>歌名</div>
                <div>演唱者</div>
              </div>
              <List className={`List--favorite Favorite-body`}
                    items={songsInFavorite}
                    renderItem={this.renderListItem.bind(this)}
                    isFetching={listInfo.isFetching} />
            </div>
          </div>
          <Pager currentLen={songsInFavorite.length} totalLen={listInfo.total} />
        </div>
      </div>
    );
  }

  renderTabs(listsInFavorite) {
    return (
      <div className={`SideTab`}>
        {listsInFavorite.map(this.renderTabItem.bind(this))}
      </div>
    );
  }

  renderTabItem(item, index) {
    return (
      <Link key={index} className={`SideTab-link`} to={`${ROOT}/favorite`} query={{ favorId: item.id, favorName: item.name }} activeClassName={`is-current`}>
        {`${item.name} (${item.nSongs})`}
      </Link>
    );
  }

  renderListItem(item, index) {
    return (
      <div key={index} className={`Song`}>
        <span>{item.name}</span>
        <span>{item.artist}</span>
      </div>
    );
  }

  loadSongs(props) {
    const { favorId } = props;
    if (favorId) {
      props.loadSongsFromFavorite(favorId);
    }
  }
}

function mapStateToProps(state, ownProps) {
  const { query: { favorId, favorName } } = ownProps.location;
  const {
    pagination: { listsFromFavorite, songsFromFavorite },
    entities: { lists, songs }
  } = state;

  const favoriteInfo = listsFromFavorite['list'] || { ids: [] };
  const listsInFavorite = favoriteInfo.ids.map(id => lists[id]);
  const listInfo = songsFromFavorite[favorId] || { ids: [] };
  const songsInFavorite = listInfo.ids.map(id => songs[id]);


  return {
    favorId,
    favorName,
    favoriteInfo,
    listsInFavorite,
    listInfo,
    songsInFavorite
  };
}

export default connect(mapStateToProps, { loadSongsFromFavorite, loadListFromFavorite })(FavoritePage);
