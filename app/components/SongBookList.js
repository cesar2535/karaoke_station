import React, { Component } from 'react';
import { Link } from 'react-router';
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
      const total = type === 'language' ? songs.length : artists.length;
      if ( type !== 'language' && name !== undefined ) {
        const renderItem = this.renderPlaylistItem.bind(this);
        const items = songs;
        const isFetching = songs.length !== 0;
        const artistsTitle = name;
        return (
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
                    items={items}
                    isFetching={isFetching} />
              </section>
            </section>
            <ListPager className='Pager' total={total} />
          </div>
        );
      } else if ( type === 'language' ) {
        const artistsTitle = mapTitleNameByType(type, name);
        const renderItem = this.renderPlaylistItem.bind(this);
        const items = songs;
        const isFetching = songs.length !== 0;
        return (
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
                    items={items}
                    isFetching={isFetching} />
              </section>
            </section>
            <ListPager className='Pager' total={total} />
          </div>
        );
      } else {
        const artistsTitle = mapTitleNameByType(type, name);
        const renderItem = this.renderArtistlistItem.bind(this);
        const items = artists;
        const itemsLeft = mapArrayToModular(items, 3, 0);
        const itemsMiddle = mapArrayToModular(items, 3, 1);
        const itemsRight = mapArrayToModular(items, 3, 2);
        const isFetchingLeft = itemsLeft.length !== 0;
        const isFetchingMiddle = itemsMiddle.length !== 0;
        const isFetchingRight = itemsRight.length !== 0;
        return <div className='SongBookListView'>
          <ListNav className='ListNav' />
          <h1>{artistsTitle}</h1>
          <section className='Artist'>
            <List className={`Playlist ${className}`}
                  renderItem={renderItem}
                  items={itemsLeft}
                  isFetching={isFetchingLeft} />
            <List className={`Playlist ${className}`}
                  renderItem={renderItem}
                  items={itemsMiddle}
                  isFetching={isFetchingMiddle}
                  reallyEmpty={false} />
            <List className={`Playlist ${className}`}
                  renderItem={renderItem}
                  items={itemsRight}
                  isFetching={isFetchingRight}
                  reallyEmpty={false} />
          </section>
          <ListPager className='ListPager' total={total} />
        </div>
      }

    }

    renderPlaylistItem(song, index) {
      console.log(index);
      const { addPrepareTodos, prepareSongId, addPlay, insertPlay, addFavorite, favoriteIds } = this.props;
      const inPlayListClass = song.inPlaylist === true ? 'InPlayList' : '';
      let preparePanelClass = '';
      if ( song.id === prepareSongId ) {
        preparePanelClass = 'PrepareTodoPanel';
      } else {
        preparePanelClass = 'PanelHidden PrepareTodoPanel';
      }
      return (
        <div key={`${song.name}-${index}`} className={'Playlist-item Playlist-item--songs'} onClick={() => addPrepareTodos(song.id)}>
            <span className={`Playlist-item-title ${inPlayListClass}`}>{song.name}</span>
            <span className={`Playlist-item-artist ${inPlayListClass}`}>{song.artist}
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

  renderArtistlistItem(artist, index) {
    const { className, type, loadSongsList } = this.props;
    const to = artist === undefined ? '' : '/songbook/' + type + '/' + artist.name;
    const artistName = artist === undefined ? '' : artist.name
    let itemClass = '';
    if (className.search('home') > -1) {
      itemClass = 'Playlist-item--home Playlist-item--artists';
    }
    return (
      <Link key={`${artistName}-${index}`} to={to} activeClassName="is-current" onClick={ () => loadSongsList('', '', type, artistName) }>
        <div key={artistName} className={`Playlist-item ${itemClass}`}>
          <span className="Playlist-item-artist Playlist-item--songbook">{artistName}</span>
        </div>
      </Link>
    );
  }
}
