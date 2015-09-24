import React, { Component, PropTypes } from 'react';
import List from './utils/List';
import PrepareTodoPanel from './PrepareTodoPanel';

export default class Playlist extends Component {
  static propTypes = {
    className: PropTypes.string,
    songs: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired
  }

  static defaultProps = {
    className: '',
    song: []
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { className, songs, isFetching } = this.props;
    return (
      <List className={`Playlist ${className}`}
            renderItem={this.renderPlaylistItem.bind(this)}
            items={songs}
            isFetching={isFetching} />
    );
  }

  renderPlaylistItem(song, index) {
    const { className, ADD_BUTTOM, INSERT_BUTTOM, ADD_FAVORITE_BUTTOM, REMOVE_BUTTOM, REMOVE_FAVORITE_BUTTOM, addPlay, insertPlay, addFavorite, favoriteIds, prepareSongId, addPrepareTodos} = this.props;
    const classNamesArr = className.split(/\s/);
    const itemClass = `Playlist-item${classNamesArr[0].slice(8)}`;
    const inPlayListClass = song.inPlaylist === true ? 'InPlayList' : '';
    let preparePanelClass = '';
    console.log(prepareSongId);
    if ( song.id === prepareSongId ) {
      preparePanelClass = 'PrepareTodoPanel';
    } else {
      preparePanelClass = 'PanelHidden PrepareTodoPanel';
    }
    return (
      <div key={index} className={`Playlist-item ${itemClass} Playlist-item--songs`} onClick={() => addPrepareTodos(song.id)} >
        <span className={`Playlist-item-title ${inPlayListClass}`}>{song.name}</span>
        <span className={`Playlist-item-artists ${inPlayListClass}`}>{song.artist}
          <PrepareTodoPanel className={preparePanelClass}
              addBtn={ADD_BUTTOM}
              insertBtn={INSERT_BUTTOM}
              addFavoriteBtn={ADD_FAVORITE_BUTTOM}
              addPlay={addPlay}
              insertPlay={insertPlay}
              addFavorite={addFavorite}
              songId={prepareSongId}
              favoriteIds={favoriteIds}
              removeBtn={REMOVE_BUTTOM}
              removeFavoriteBtn={REMOVE_FAVORITE_BUTTOM} />
        </span>
      </div>
    );
  }
}
