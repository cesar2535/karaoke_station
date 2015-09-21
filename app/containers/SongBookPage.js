import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import SongBookList from '../components/SongBookList';
import SideBar from '../components/SideBar';
import SongBookSideTab from '../components/sidetab/SongBookSideTab';
import { bindActionCreators } from 'redux';
import * as songsListActions from '../actions/songslist';
// import { loadArtistsList, loadSongsList } from '../actions/songslist';
// import loadSongsList from '../actions/songslist';

import { FAKE_SONGSLIST, FAKE_MALE_ARTISTLIST, FAKE_FEMALE_ARTISTLIST, FAKE_GROUP_ARTISTLIST } from '../constants/FakeData';

function loadData(props) {
  props.loadArtistsList();
}

function loadSongsData(props) {
  console.log(props);
  props.loadSongsList('', '', props.params.type, props.params.name);
}

class SongBookPage extends Component {
  static propTypes = {

  }

  static defaultProps = {

  }

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { params } = this.props;
    if ( params.type !== 'language' && params.name !== undefined ) {
      loadSongsData(this.props);
    }
    loadData(this.props);
  }

  render() {
    const { songs, artists, params, prepareSongId, addPrepareTodos, addPlay, insertPlay, addFavorite, artists_list, loadSongsListByGender } = this.props;
    //console.log(this.props);
    return (
      <section className="Main Main--songbook">
        <SideBar className="SideBar" />
        <SongBookSideTab className="SideTab" artists_list={artists_list} loadsongslist={loadSongsListByGender} />
        <div className="Main-wrapper Main-wrapper--songbook">
          <SongBookList className="ArtistList Playlist--home"
            songs={songs}
            artists={artists}
            type={params.type}
            name={params.name}
            prepareSongId={prepareSongId}
            addPrepareTodos={addPrepareTodos}
            addPlay={addPlay}
            insertPlay={insertPlay}
            addFavorite={addFavorite} />
        </div>
      </section>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const artists = getArtistFakeDate(ownProps.params.type);
  return {
    songs: FAKE_SONGSLIST,
    artists: artists,
    prepareSongId: state.songslist.songId,
    artists_list: state.sidetab.artists_list
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(songsListActions, dispatch)
  };
}

function getArtistFakeDate(type) {
  switch (type) {
    case 'male':
      return FAKE_MALE_ARTISTLIST;
    case 'female':
      return FAKE_FEMALE_ARTISTLIST;
    case 'group':
      return FAKE_GROUP_ARTISTLIST;
    default:
      return [];
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SongBookPage);
