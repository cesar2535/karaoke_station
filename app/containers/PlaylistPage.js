import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import SideBar from '../components/SideBar';
import SongBookSideTab from '../components/sidetab/SongBookSideTab';
import SideTab from '../components/SideTab';
import Playlist from '../components/Playlist';
import ListNav from '../components/ListNav';
import ListPager from '../components/ListPager';

import { FAKE_PLAYLIST } from '../constants/FakeData';
import loadPlaylist from '../actions/playlist';

function loadData(props) {
  props.loadPlaylist('current');
  props.loadPlaylist('finished');
}

class PlaylistPage extends Component {
  static propTypes = {

  }

  static defaultProps = {

  }

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    loadData(this.props);
  }

  render() {
    const { playlist, route: { path } } = this.props;
    const playlists = [{
      title: '待唱歌曲',
      slug: 'queue'
    }, {
      title: '已唱歌曲',
      slug: 'completed'
    }];

    const paths = path.split(/\//);

    return (
      <section className="Main Main--playlist">
        <SideBar className="SideBar" />

        <SideTab className="SideTab" items={playlists} renderItem={this._renderSideTabItem.bind(this)} />
        <div className="Main-wrapper Main-wrapper--playlist">
          <ListNav className='ListNav ListNav--playlist' />
          <h1 className="Main-wrapper-title">{paths[paths.length - 1]}</h1>
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
      <Link key={index} className="SideTab-listitem" to={`/playlist/${item.slug}`} activeClassName="is-current">
        <span>{item.title}</span>
      </Link>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    playlist: FAKE_PLAYLIST
  }
}

export default connect(mapStateToProps, { loadPlaylist })(PlaylistPage);
