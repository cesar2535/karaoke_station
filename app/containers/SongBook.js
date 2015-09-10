import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import SongBookList from '../components/SongBookList';
import SideBar from '../components/SideBar';
import TabItem from '../components/TabItem';

import { FAKE_PLAYLIST, FAKE_ARTISTLIST } from '../constants/FakeData';

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
        <SideBar className="" />
        <TabItem className="" />
        <SongBookList className="Playlist--home" songs={songs} artists={artists} type={params.type} />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    songs: FAKE_PLAYLIST,
    artists: FAKE_ARTISTLIST
  };
}

export default connect(mapStateToProps)(SongBook);
