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
      // const renderItem = type === 'language' ? this.renderPlaylistItem.bind(this) : this.renderArtistlistItem.bind(this);
      // const items = type === 'language' ? songs : artists;
      // const artistsTitle = mapTitleNameByType(type, name);
      // const itemsLeft = type === 'language' ? [] : mapArrayToModular(items, 3, 0);
      // const itemsMiddle = type === 'language' ? [] : mapArrayToModular(items, 3, 1);
      // const itemsRight = type === 'language' ? [] : mapArrayToModular(items, 3, 2);
      // const [ itemsLeft, itemsMiddle, itemsRight ] = unzip(chunk(items, 3));
      // const renderFlag = type !== 'language' && name !== undefined;
      // console.log("幹", renderFlag, type, name);
      const total = type === 'language' ? songs.length : artists.length;
      if ( type !== 'language' && name !== undefined ) {
        const renderItem = this.renderPlaylistItem.bind(this);
        const items = songs;
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
                    items={items} />
              </section>
            </section>
            <ListPager className='Pager' total={total} />
          </div>
        );
      } else if ( type === 'language' ) {
        const artistsTitle = mapTitleNameByType(type, name);
        const renderItem = this.renderPlaylistItem.bind(this);
        const items = songs;
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
                    items={items} />
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
        return <div className='SongBookListView'>
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
      }
      // return type !== 'language' ? (
      //   <div className='SongBookListView'>
      //     <ListNav className='ListNav' />
      //     <h1>{artistsTitle}</h1>
      //     <section className='Artist'>
      //       <List className={`Playlist ${className}`}
      //             renderItem={renderItem}
      //             items={itemsLeft} />
      //         <List className={`Playlist ${className}`}
      //             renderItem={renderItem}
      //             items={itemsMiddle} />
      //         <List className={`Playlist ${className}`}
      //             renderItem={renderItem}
      //             items={itemsRight} />
      //     </section>
      //     <ListPager className='ListPager' total={total} />
      //   </div>
      // ) : (
      //   <div className='SongBookListView'>
      //     <ListNav className='ListNav' />
      //     <h1>{artistsTitle}</h1>
      //     <section className='SongBookListItem'>
      //       <section className='SongListTitle'>
      //         <span className='SongListTitle--Left'>歌名</span>
      //         <span className='SongListTitle--Right'>演唱者</span>
      //       </section>
      //       <section className=''>
      //         <List className={`${className}`}
      //               renderItem={renderItem}
      //               items={items} />
      //         </section>
      //       </section>
      //       <ListPager className='Pager' total={total} />
      //     </div>
      // );
    }

    renderPlaylistItem(song, index) {
      console.log("oh yes", song);
      const { addPrepareTodos, prepareSongId, addPlay, insertPlay, addFavorite, favoriteIds } = this.props;
      const inPlayListClass = song.inPlaylist === true ? 'InPlayList' : '';
      let preparePanelClass = '';
      if ( song.id === prepareSongId ) {
        preparePanelClass = 'PrepareTodoPanel';
      } else {
        preparePanelClass = 'PanelHidden PrepareTodoPanel';
      }
      return (
        <div className={'Playlist-item Playlist-item--songs'} onClick={() => addPrepareTodos(song.id)}>
            <span className={`Playlist-item-title ${inPlayListClass}`}>{song.title}</span>
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
