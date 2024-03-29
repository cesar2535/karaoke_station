import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import unzip from 'lodash/array/unzip';
import chunk from 'lodash/array/chunk';

import { ROOT } from '../constants/Config';
import { loadSongsByArtist, loadSongsByLang, loadArtistsByArtistType } from '../actions/songslist';

import List from '../components/List';
import Filter from '../components/Filter';
import Pager from '../components/Pager';
import ActionPanel from '../components/ActionPanel';

function checkSongbookType(songbookType) {
  switch (songbookType) {
    case 'songs':
    case 'artists':
      return true;
    default:
      return false;
  }
}

function checkLang(lang) {
  switch (lang) {
    case 'Mandarin':
    case 'Taiwanese':
    case 'Cantonese':
      return true;
    default:
      return false;
  }
}

function loadData(props) {
  const { query } = props;
  const { artistType, artistId, lang, stroke } = query;

  if (artistType) {
    return props.loadArtistsByArtistType({ artistType });
  }

  if (checkLang(lang) && stroke) {
    return props.loadSongsByLang({ lang, nsongs: stroke });
  } else if (checkLang(lang)) {
    return ;
  }

  if (lang) {
    return props.loadSongsByLang({ lang });
  }

  if (artistId) {
    return props.loadSongsByArtist({ artistId });
  }
}

class SongbookContent extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const {
      songbookType, history
    } = this.props;
    loadData(this.props);
  }

  componentWillReceiveProps(nextProps) {
    const {
      songbookType, query,
      loadArtistsByArtistType, loadSongsByArtist, loadSongsByLang
    } = nextProps;

    if (songbookType === 'artists' && query.artistType && (query.artistType !== this.props.query.artistType)) {
      return loadArtistsByArtistType({ artistType: query.artistType });
    }

    if (songbookType === 'songs' && query.artistId && (query.artistId !== this.props.query.artistId)) {
      return loadSongsByArtist({
        artistId: query.artistId,
        artistName: query.artistName
      });
    }

    if (query.stroke && query.stroke !== this.props.query.stroke) {
      return loadSongsByLang({
        lang: query.lang,
        nsongs: query.stroke
      });
    }

    if (checkLang(query.lang) && query.lang !== this.props.query.lang) {
      return ;
    }

    if (query.lang && query.lang !== this.props.query.lang) {
      return loadSongsByLang({ lang: query.lang });
    }
  }

  render() {
    return this.renderContent(this.props);
  }

  renderContent(props) {
    const {
      songbookType, query,
      songsInfo, songsInSongbook,
      artistsInfo, artistsInSongbook
    } = props;

    if ( songbookType === 'artists' && query.artistType ) {
      const artistsDist = unzip(chunk(artistsInSongbook, 3));
      console.log(artistsDist);
      return this.renderArtistsContent(artistsDist, artistsInfo, artistsInSongbook.length, query);
    }

    if ( songbookType === 'songs' && checkLang(query.lang) && typeof query.stroke === 'undefined' ) {
      return this.renderStrokeOptions();
    }

    if (!checkSongbookType(songbookType)) {
      return (
        <div className={`Page-content`}>
          <h1>NOTHING HERE!!</h1>
        </div>
      );
    }

    return this.renderSongsContent(songsInSongbook, songsInfo, query);
  }

  renderStrokeOptions() {
    const strokes = [{
      label: '一字部',
      value: 1
    }, {
      label: '二字部',
      value: 2
    }, {
      label: '三字部',
      value: 3
    }, {
      label: '四字部',
      value: 4
    }, {
      label: '五字部',
      value: 5
    }, {
      label: '六字部',
      value: 6
    }, {
      label: '七字部',
      value: 7
    }, {
      label: '八字部以上',
      value: 8
    }];

    return (
      <div className={`Page-content`}>
        <section className={`Page-main`}>
          <h1>字部</h1>
          <div className={`Songbook Songbook--w60`}>
            <List className={`List--stroke Songbook-body`}
                  items={strokes}
                  renderItem={this.renderStrokeOption.bind(this)} />
          </div>
        </section>
      </div>
    );
  }

  renderStrokeOption(item, index) {
    const { query: { lang } } = this.props;
    return (
      <Link key={index} className={`Stroke`} to={`${ROOT}/songbook/songs`} query={{ lang, stroke: item.value }}>
        {item.label}
      </Link>
    );
  }

  renderSongsContent(songs = [], songsInfo, query) {
    const { lang, stroke, artistId, artistName } = query;
    let title;

    if ( artistId ) {
      title = artistName;
    } else if ( stroke ) {
      title = `${stroke} 字部`;
    } else if ( lang ) {
      title = lang
    }

    return (
      <div className={`Page-content`}>
        <Filter />
        <section className={`Page-main`}>
          <h1>{title}</h1>
          <div className={`Songbook Songbook--w620`}>
            <div className={`Songbook-head`}>
              <div>歌名</div>
              <div>演唱者</div>
            </div>
            <List className={`List--song Songbook-body`}
                  items={songs}
                  renderItem={this.renderSong.bind(this)}
                  onLoadMore={this.loadMoreSongs.bind(this)}
                  isFetching={songsInfo.isFetching} />
          </div>
        </section>
        <Pager currentLen={songs.length} totalLen={songsInfo.total} />
      </div>
    );
  }

  renderSong(item, index) {
    return (
      <div key={index} className={`Song`} onClick={this.toggleActionPanel.bind(this)}>
        <div className={`Song-info`}>
          <span>{item.name}</span>
          <span>{item.artist}</span>
        </div>
        <ActionPanel data={{ songId: item.id }} />
      </div>
    );
  }

  renderArtistsContent(artists = [], artistsInfo, currentLen, query) {
    const { artistType } = query;
    return (
      <div className={`Page-content`}>
        <Filter />
        <section className={`Page-main`}>
          <h1>{artistType.toUpperCase()}</h1>
          <div className={`Songbook`}>
            <List className={`List--artist Songbook-body`}
                  items={artists}
                  renderItem={this.renderArtist.bind(this)}
                  onLoadMore={this.loadMoreArtists.bind(this)}
                  isFetching={artistsInfo.isFetching} />
          </div>
        </section>
        <Pager currentLen={currentLen} totalLen={artistsInfo.total} />
      </div>
    );
  }

  renderArtist(item, index) {
    return (
      <div key={index} className={`List-col`}>
        {item.map((subItem, subIndex) => {
          if (typeof subItem === 'undefined') {
            return <a className={`Artist Artist--empty`} />;
          }
          return <Link key={subIndex} className={`Artist`} to={`${ROOT}/songbook/songs`} query={{ artistName: subItem.name, artistId: subItem.id }}>{subItem.name}</Link>
        })}
      </div>
    );
  }

  toggleActionPanel(evt) {
    evt.currentTarget.classList.toggle('is-expanded');
    evt.currentTarget.classList.toggle('is-selected');
  }

  loadMoreSongs(evt) {
    const { query, songsInfo, songsInSongbook, loadSongsByLang, loadSongsByArtist } = this.props;
    const { lang, stroke, artistId, artistName } = query;

    if ( songsInSongbook.length >= songsInfo.total ) {
      return ;
    }

    if (artistId) {
      return loadSongsByArtist({ page: songsInfo.page + 1, artistId, artistName });
    }

    return loadSongsByLang({ page: songsInfo.page + 1, lang, nsongs: stroke });
  }

  loadMoreArtists(evt) {
    const { query, artistsInfo, artistsInSongbook, loadArtistsByArtistType } = this.props;
    const { artistType } = query

    if ( artistsInSongbook.length >= artistsInfo.total ) {
      return ;
    }

    return loadArtistsByArtistType({ page: artistsInfo.page + 1, artistType });
  }
}

function mapStateToProps(state, ownProps) {
  const { query } = ownProps.location;
  const { songbookType } = ownProps.params;
  const {
    entities: { songs, artists },
    pagination: { artistsByType, songsByLang, songsByArtist }
  } = state

  let songsInfo = { ids: [], page: 0 };

  if (query.artistId) {
    songsInfo = songsByArtist[query.artistId] || { ids: [], page: 0 };
  } else if (query.lang) {
    songsInfo = songsByLang[query.lang] || { ids: [], page: 0 };
  }

  const songsInSongbook = songsInfo.ids.map(id => songs[id]);
  const artistsInfo = artistsByType[query.artistType] || { ids: [], page: 0 };
  const artistsInSongbook = artistsInfo.ids.map(id => artists[id]);


  return {
    query,
    songbookType,
    songsInfo,
    artistsInfo,
    songsInSongbook,
    artistsInSongbook
  };
}

export default connect(mapStateToProps, { loadSongsByArtist, loadSongsByLang, loadArtistsByArtistType })(SongbookContent);
