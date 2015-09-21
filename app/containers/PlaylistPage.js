import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import SideBar from '../components/SideBar';
import SongBookSideTab from '../components/sidetab/SongBookSideTab';
import SideTab from '../components/SideTab';
import Playlist from '../components/Playlist';
import ListNav from '../components/ListNav';
import ListPager from '../components/ListPager';

import { loadPlaylist } from '../actions/playlist';

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
    const { route: { path }, queue, finished, songsInQueue, songsInFinished } = this.props;
    const playlists = [{
      title: '待唱歌曲',
      slug: 'current',
      count: queue.length || 0
    }, {
      title: '已唱歌曲',
      slug: 'finished',
      count: finished.length || 0
    }];

    const paths = path.split(/\//);
    const currentPage = paths[paths.length - 1];

    let viewTitle;
    let viewList = [];
    let viewState;

    switch (currentPage) {
      case 'current':
        viewTitle = '待唱歌曲';
        viewList = queue;
        viewState = songsInQueue
        break;
      case 'finished':
        viewTitle = '已唱歌曲',
        viewList = finished;
        viewState = songsInFinished
    }

    return (
      <section className="Main Main--playlist">
        <SideBar className="SideBar" />

        <SideTab className="SideTab" items={playlists} renderItem={this._renderSideTabItem.bind(this)} />
        <div className="Main-wrapper Main-wrapper--playlist">
          <ListNav className='ListNav ListNav--playlist' />
          <h1 className="Main-wrapper-title">{viewTitle}</h1>
          <div className="PlaylistView">
            <div className="PlaylistView-head">
              <span>Title</span>
              <span>Artist</span>
            </div>
            <Playlist className="Playlist--playlist" songs={viewList} isFetching={viewState.isFetching || false} />
          </div>
          <ListPager className="ListPager--playlist" total={viewList.length} />
        </div>
      </section>
    );
  }

  _renderSideTabItem(item, index) {
    return (
      <Link key={index} className="SideTab-listitem" to={`/playlist/${item.slug}`} activeClassName="is-current">
        <span>{`${item.title} (${item.count})`}</span>
      </Link>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const {
    pagination: { playlist },
    entities: { songs }
  } = state;

  const songsInQueue = playlist['current'] || { ids: [] };
  const songsInFinished = playlist['finished'] || { ids: [] };
  const queue = songsInQueue.ids.map(id => songs[id]);
  const finished = songsInFinished.ids.map(id => songs[id]);

  return {
    songsInQueue,
    songsInFinished,
    queue,
    finished
  }
}

export default connect(mapStateToProps, { loadPlaylist })(PlaylistPage);
