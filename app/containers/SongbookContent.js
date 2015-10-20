import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { ROOT } from '../constants/Config';

import List from '../components/List';
import Filter from '../components/Filter';
import Pager from '../components/Pager';
import ActionPanel from '../components/ActionPanel';

class SongbookContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`Page-content`}>
        <Filter />
        {this.renderContent(this.props)}
        <Pager />
      </div>
    )
  }

  renderContent(props) {
    const { songbookType, lang, stroke, artistType, artistId } = props;
    console.log(lang, stroke, artistType);

    if ( songbookType === 'artists' && artistType ) {
      return this.renderArtistsContent();
    }

    if ( songbookType === 'songs' && (lang === 'Mandarin' || lang === 'Taiwanese' || lang === 'Cantonese') && typeof stroke === 'undefined' ) {
      return this.renderStrokeOptions();
    }

    if ( songbookType === 'songs' && artistId ) {
      return this.renderSongsContent();
    }
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
      <section className={`Page-main`}>
        <h1>字部</h1>
        <div className={`Songbook Songbook--w60`}>
          <List className={`List--stroke Songbook-body`} items={strokes} renderItem={this.renderStrokeOption.bind(this)} />
        </div>
      </section>
    );
  }

  renderStrokeOption(item, index) {
    const { lang } = this.props;
    return (
      <Link className={`Stroke`} to={`${ROOT}/songbook/songs`} query={{ lang, stroke: item.value }}>
        {item.label}
      </Link>
    );
  }

  renderSongsContent(songs = []) {
    return (
      <section className={`Page-main`}>
        <h1></h1>
        <div className={`Songbook Songbook--w620`}>
          <div className={`Songbook-head`}>
            <div>歌名</div>
            <div>演唱者</div>
          </div>
          <List className={`List--song Songbook-body`} items={songs} renderItem={this.renderSong.bind(this)}/>
        </div>
      </section>
    );
  }

  renderSong(item, index) {
    return (
      <div className={`Song`}>
        <div className={`Song-info`}>
          <span>{item.name}</span>
          <span>{item.artist}</span>
        </div>
        <ActionPanel data={{ songId: item.id }} />
      </div>
    );
  }

  renderArtistsContent(artists = []) {
    return (
      <section className={`Page-main`}>
        <h1></h1>
        <div className={`Songbook`}>
          <List className={`List--artist Songbook-body`} items={artists} renderItem={this.renderArtist.bind(this)} />
        </div>
      </section>
    );
  }

  renderArtist(item, index) {
    return (
      <div className={``}>
        <Link className={``} to={`${ROOT}/songbook/songs`} query={{ artist: '', artistId: '' }}>test</Link>
        <Link className={``} to={`${ROOT}/songbook/songs`} query={{ artist: '', artistId: '' }}>test</Link>
        <Link className={``} to={`${ROOT}/songbook/songs`} query={{ artist: '', artistId: '' }}>test</Link>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const { query } = ownProps.location;
  const { songbookType } = ownProps.params;

  return {
    ...query,
    songbookType
  };
}

export default connect(mapStateToProps)(SongbookContent);
