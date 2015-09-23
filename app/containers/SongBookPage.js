import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import SongBookList from '../components/SongBookList';
import SideBar from '../components/SideBar';
import SongBookSideTab from '../components/sidetab/SongBookSideTab';
import { bindActionCreators } from 'redux';
import * as songsListActions from '../actions/songslist';

function loadData(props) {
  props.loadArtistsList();
  props.loadLanguageList();
}

function loadSongsDataByArtists(props) {
  props.loadSongsList(undefined, undefined, props.params.type, props.params.name);
}

function loadArtistByGender(props) {
  props.loadArtistsListByGender(props.params.type);
}

function loadSongsDataByLanguage(props) {
  props.loadSongsList(undefined, undefined, undefined, undefined, 1, 80, props.params.name);
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
      loadSongsDataByArtists(this.props);
    } else if ( params.type !== 'language' ) {
      loadArtistByGender(this.props);
    } else {
      loadSongsDataByLanguage(this.props);
    }
    loadData(this.props);
  }

  render() {
    const { songs, songsIds, artists, artistsIds, params, prepareSongId, addPrepareTodos, addPlay, insertPlay, addFavorite, artistsList, loadArtistsListByGender, loadSongsList, languages } = this.props;
    return (
      <section className="Main Main--songbook">
        <SideBar className="SideBar" />
        <SongBookSideTab className="SideTab" artistsList={artistsList} languages={languages} loadArtistsListByGender={loadArtistsListByGender} loadSongsList={loadSongsList} />
        <div className="Main-wrapper Main-wrapper--songbook">
          <SongBookList className="ArtistList Playlist"
            songs={songs}
            artists={artists}
            type={params.type}
            name={params.name}
            prepareSongId={prepareSongId}
            addPrepareTodos={addPrepareTodos}
            addPlay={addPlay}
            insertPlay={insertPlay}
            addFavorite={addFavorite}
            loadSongsList={loadSongsList}
            songsIds={songsIds}
            artistsIds={artistsIds} />
        </div>
      </section>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const {
    pagination: { songlist, artistlist },
    entities: { songs, artists }
  } = state;
  const songsIds = songlist[ownProps.params.name] || { ids: [] };
  const songsData = songsIds.ids.map(id => songs[id]);
  const artistsIds = artistlist[ownProps.params.type] || { ids: [] };
  const artistsData = artistsIds.ids.map(id => artists[id]);
  return {
    songsIds,
    artistsIds,
    songs: songsData,
    artists: artistsData,
    prepareSongId: state.songslist.songId,
    artistsList: state.sidetab.artists_list,
    languages: state.sidetab.languages
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(songsListActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SongBookPage);
