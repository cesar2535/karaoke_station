import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import SideBar from '../components/SideBar';
import SongBookSideTab from '../components/sidetab/SongBookSideTab';
import Playlist from '../components/Playlist';
import ListNav from '../components/ListNav';
import ListPager from '../components/ListPager';

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
      <section className="Main Main--playlist">
        <SideBar className="SideBar" />
        <SongBookSideTab className="SideTab" />
        <div className="Main-wrapper Main-wrapper--playlist">
          <ListNav className='ListNav ListNav--playlist' />
          <h1 className="Main-wrapper-title">Playlist</h1>
          <div className="PlaylistView">
            <div className="PlaylistView-head">
              <span>Title</span>
              <span>Artist</span>
            </div>
            <Playlist className="Playlist--playlist" songs={playlist} />
          </div>
          <ListPager className="ListPager--playlist" total={playlist.length} />
        </div>
      </section>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    playlist: FAKE_PLAYLIST
  }
}

export default connect(mapStateToProps)(PlaylistPage);
