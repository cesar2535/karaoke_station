import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import SongBookList from '../components/SongBookList';
import SideBar from '../components/SideBar';
import SongBookSideTab from '../components/sidetab/SongBookSideTab';
import { bindActionCreators } from 'redux';
import * as songsListActions from '../actions/songslist';


import { FAKE_PLAYLIST, FAKE_MALE_ARTISTLIST, FAKE_FEMALE_ARTISTLIST, FAKE_GROUP_ARTISTLIST } from '../constants/FakeData';

class SongBookPage extends Component {
  static propTypes = {

  }

  static defaultProps = {

  }

  constructor(props) {
    super(props);
  }

  render() {
    const { songs, artists, params, prepareSongId, addPrepareTodos } = this.props;
    return (
      <section className="Main Main--songbook">
        <SideBar className="SideBar" />
        <SongBookSideTab className="SideTab" />
        <div className="Main-wrapper Main-wrapper--songbook">
          <SongBookList className="ArtistList Playlist--home"
            songs={songs}
            artists={artists}
            type={params.type}
            name={params.name}
            prepareSongId={prepareSongId}
            addPrepareTodos={addPrepareTodos} />
        </div>
      </section>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const artists = getArtistFakeDate(ownProps.params.type);
  return {
    songs: FAKE_PLAYLIST,
    artists: artists,
    prepareSongId: state.songslist.songId
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
