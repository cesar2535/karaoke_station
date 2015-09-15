import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import SideBar from '../components/SideBar';
import SongBookSideTab from '../components/sidetab/SongBookSideTab';
import SideTab from '../components/SideTab';
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
    const playlists = [{
      title: 'Queue'
    }, {
      title: 'Completed'
    }];

    return (
      <section className="Main Main--playlist">
        <SideBar className="SideBar" />

        <SideTab className="SideTab" items={playlists} renderItem={this._renderSideTabItem.bind(this)} />
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
    );
  }

  _renderSideTabItem(item, index) {
    return (
      <div key={index} className="SideTab-listitem">
        <span>{item.title}</span>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    playlist: FAKE_PLAYLIST
  }
}

export default connect(mapStateToProps)(PlaylistPage);
