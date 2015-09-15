import React, { Component, PropTypes } from 'react';
import { chunk, unzip } from 'lodash';
import List from './utils/List';
import ListNav from './ListNav';
import Pager from './Pager';

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
      console.log(songs, songs.length)
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
          <Pager className='Pager' total={total} />
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
            <Pager className='Pager' total={total} />
          </div>
      );
    }

    renderPlaylistItem(song, index) {
      const { className } = this.props;
      let itemClass = '';
      if (className.search('home') > -1) {
        // itemClass = 'Playlist-item--home';
      }
      return (
        <div key={index} className={'Playlist-item Playlist-item--songs'}>
            <span className="Playlist-item-title">{song.title}</span>
            <span className="Playlist-item-artist">{song.artist}</span>
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

function mapArrayToModular(array, mod, myIndex) {
  const return_array = [];
  let i = myIndex;
  for ( i; i < array.length; i += mod ){
    return_array.push(array[i]);
  }
  return return_array;
}

function mapTitleNameByType(type, name) {
  switch(type) {
    case 'male':
      return '男歌手';
    case 'female':
      return '女歌手';
    case 'group':
      return '團體';
    case undefined:
      return mapTitleNameFromLanguage(name);
    default:
      return '';
  }
}

function mapTitleNameFromLanguage(name) {
  switch(name.toLowerCase()) {
    case 'tc':
      return '中文';
    case 'e':
      return '英文';
    case 'c':
      return '粵語';
    case 't':
      return '台語';
    case 'j':
      return '日語';
    case 'k':
      return '韓語';
    case 'eo':
      return '西班牙語';
    case 'other':
      return '其他語言';
    default:
      return '你哪位';
  }
}
