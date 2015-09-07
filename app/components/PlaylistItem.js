import React, { Component, PropTypes } from 'react';

export default class PlaylistItem extends Component {
  static propTypes = {
    className: PropTypes.string,
    song: PropTypes.shape({
      title: PropTypes.string,
      artist: PropTypes.string
    })
  }

  static defaultProps = {
    className: '',
    song: {}
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { className, song } = this.props;
    return (
      <div className={`Playlist-item ${className}`}>
        <span className="Playlist-item-title">{song.title}</span>
        <span className="Playlist-item-artist">{song.artist}</span>
      </div>
    );
  }
}
