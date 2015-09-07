import React, { Component, PropTypes } from 'react';
import List from './List';

export default class Playlist extends Component {
  static propTypes = {
    className: PropTypes.string,
    songs: PropTypes.array.isRequired
  }

  static defaultProps = {
    className: '',
    song: []
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { className, songs } = this.props;
    return (
      <List className="Playlist"
            renderItem={this.renderPlaylistItem.bind(this)}
            items={songs} />
    );
  }

  renderPlaylistItem(song) {
    return (
      <div key={song.title} className="Playlist-item">
        <span className="Playlist-item-title">{song.title}</span>
        <span className="Playlist-item-artist">{song.artist}</span>
      </div>
    );
  }
}
