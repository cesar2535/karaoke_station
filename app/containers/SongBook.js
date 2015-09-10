import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import SongBookList from '../components/SongBookList';
import SideBar from '../components/SideBar';
import SongBookTabItem from '../components/tabitems/SongBookTabItem';

import { FAKE_PLAYLIST, FAKE_MALE_ARTISTLIST, FAKE_FEMALE_ARTISTLIST, FAKE_GROUP_ARTISTLIST } from '../constants/FakeData';

class SongBook extends Component {
  static propTypes = {

  }

  static defaultProps = {

  }

  constructor(props) {
    super(props);
  }

  render() {
    const { songs, artists, params } = this.props;
    return (
      <div className="Main-wrapper">
        <SideBar className="SideBar" />
        <SongBookTabItem className="TabItem" />
        <SongBookList className="ArtistList Playlist--home" songs={songs} artists={artists} type={params.type} />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const artists = getArtistFakeDate(ownProps.params.type);
  return {
    songs: FAKE_PLAYLIST,
    artists: artists
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

export default connect(mapStateToProps)(SongBook);
