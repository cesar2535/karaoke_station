import React, { Component } from 'react';
// import { chunk, unzip } from 'lodash';
import List from './utils/List';
import ListNav from './ListNav';
import ListPager from './ListPager';
import PrepareTodoPanel from './PrepareTodoPanel';
import { ADD_BUTTOM, INSERT_BUTTOM, ADD_FAVORITE_BUTTOM } from '../constants/Config';
import { mapArrayToModular, mapTitleNameByType, mapTitleNameFromLanguage } from '../constants/FakeData';

export default class SongBookList extends Component {

  render() {
      const { className, songs, artists, type, name } = this.props;
      const renderItem = type === undefined ? this.renderPlaylistItem.bind(this) : this.renderArtistlistItem.bind(this);
      const items = type === undefined ? songs : artists;
      const artistsTitle = mapTitleNameByType(type, name);
      const itemsLeft = type === undefined ? [] : mapArrayToModular(items, 3, 0);
      const itemsMiddle = type === undefined ? [] : mapArrayToModular(items, 3, 1);
      const itemsRight = type === undefined ? [] : mapArrayToModular(items, 3, 2);
      // const [ itemsLeft, itemsMiddle, itemsRight ] = unzip(chunk(items, 3));
      const total = type === undefined ? songs.length : artists.length;
      return type !== undefined ? (
        <div className='SongBookListView'>
          <ListNav className='ListNav' />
          <h1>{artistsTitle}</h1>
          <section className='Artist'>
            <List className={`Playlist ${className}`}
                  renderItem={renderItem}
                  items={itemsLeft} />
              <List className={`Playlist ${className}`}
                  renderItem={renderItem}
                  items={itemsMiddle} />
              <List className={`Playlist ${className}`}
                  renderItem={renderItem}
                  items={itemsRight} />
          </section>
          <ListPager className='ListPager' total={total} />
        </div>
      ) : (
        <div className='SongBookListView'>
          <ListNav className='ListNav' />
          <h1>{artistsTitle}</h1>
          <section className='SongBookListItem'>
            <section className='SongListTitle'>
              <span className='SongListTitle--Left'>歌名</span>
              <span className='SongListTitle--Right'>演唱者</span>
            </section>
            <section className=''>
              <List className={`${className}`}
                    renderItem={renderItem}
                    items={items} />
              </section>
            </section>
            <ListPager className='Pager' total={total} />
          </div>
      );
    }

    renderPlaylistItem(song, index) {
      const { addPrepareTodos, prepareSongId, addPlay, insertPlay, addFavorite, favoriteIds } = this.props;
      let preparePanelClass = '';
      if ( song.id === prepareSongId ) {
        preparePanelClass = 'PrepareTodoPanel';
      } else {
        preparePanelClass = 'PanelHidden PrepareTodoPanel';
      }
      return (
        <div key={index} className={'Playlist-item Playlist-item--songs'} onClick={() => addPrepareTodos(song.id)}>
            <span className="Playlist-item-title">{song.title}</span>
            <span className="Playlist-item-artist">{song.artist}
              <PrepareTodoPanel className={preparePanelClass}
              addBtn={ADD_BUTTOM}
              insertBtn={INSERT_BUTTOM}
              addFavoriteBtn={ADD_FAVORITE_BUTTOM}
              addPlay={addPlay}
              insertPlay={insertPlay}
              addFavorite={addFavorite}
              songId={prepareSongId}
              favoriteIds={favoriteIds} />
            </span>
        </div>
      );
    }

  renderArtistlistItem(artist) {
    const { className } = this.props;
    let itemClass = '';
    if (className.search('home') > -1) {
      itemClass = 'Playlist-item--home Playlist-item--artists';
    }
    return (
      <div key={artist.name} className={`Playlist-item ${itemClass}`}>
        <span className="Playlist-item-artist">{artist.name}</span>
      </div>
    );
  }
}
