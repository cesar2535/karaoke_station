import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import SideBar from '../components/SideBar';
import SongBookTabItem from '../components/tabitems/SongBookTabItem';
import Playlist from '../components/Playlist';
import ListNav from '../components/ListNav';

import { FAKE_PLAYLIST } from '../constants/FakeData';

class PlaylistPage extends Component {
  static propTypes = {

  }

  static defaultProps = {

  }

  constructor(props) {
    super(props);
  }

  render() {
    const { playlist } = this.props;
    return (
      <div className="Main-wrapper">
      <SideBar className="SideBar" />
      <SongBookTabItem className="TabItem" />
      <div className="">
      <ListNav className='ListNav' />
      </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    playlist: []
  }
}

export default connect(mapStateToProps)(PlaylistPage);
