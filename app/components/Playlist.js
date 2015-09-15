import React, { Component, PropTypes } from 'react';
import List from './utils/List';

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
      <List className={`Playlist ${className}`}
            renderItem={this.renderPlaylistItem.bind(this)}
            items={songs} />
    );
  }

  renderPlaylistItem(song) {
    const { className } = this.props;
    const classNamesArr = className.split(/\s/);
    const itemClass = `Playlist-item${classNamesArr[0].slice(8)}`;
    return (
      <div key={song.title} className={`Playlist-item ${itemClass}`}>
        <span className="Playlist-item-title">{song.title}</span>
        <span className="Playlist-item-artist">{song.artist}</span>
      </div>
    );
  }
}
