import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { mapTitleNameByType, mapTitleNameFromLanguage } from '../../constants/FakeData';

export default class SideTab extends Component {
  render() {
    const { className, artistsList, loadArtistsListByGender, languages, loadSongsList } = this.props;
    return (
      <div className={className}>
        <section className='SideTab-item'>
          <h6>歌星點歌</h6>
            {artistsList.map( (artists, index) => {
              const to = '/songbook/' + artists;
              const showName = mapTitleNameByType(artists, '');
              return (
                <Link key={index} to={to} activeClassName="is-current" onClick={ () => loadArtistsListByGender(artists) } >
                  <li>{showName}</li>
                </Link>
              );
            })
          }
        </section>
        <section className='SideTab-item'>
          <h6>依語言點歌</h6>
            {languages.map( (language, index) => {
              const to = '/songbook/language/' + language;
              const showName = mapTitleNameFromLanguage(language);
              return (
                <Link key={index} to={to} activeClassName="is-current" onClick={ () => loadSongsList(undefined, undefined, undefined, undefined, 1, 80, language) } >
                  <li>{showName}</li>
                </Link>
              );
            })
          }
          {/*<Link to='/songbook/language/tc' activeClassName="is-current">
            <li>中文</li>
          </Link>
          <Link to='/songbook/language/e' activeClassName="is-current">
            <li>英文</li>
          </Link>
          <Link to='/songbook/language/c' activeClassName="is-current">
            <li>粵語</li>
          </Link>
          <Link to='/songbook/language/t' activeClassName="is-current">
           <li>台語</li>
          </Link>
          <Link to='/songbook/language/j' activeClassName="is-current">
            <li>日語</li>
          </Link>
          <Link to='/songbook/language/k' activeClassName="is-current">
            <li>韓語</li>
          </Link>
          <Link to='/songbook/language/eo' activeClassName="is-current">
            <li>西班牙語</li>
          </Link>
          <Link to='/songbook/language/other'>
            <li>其他語言</li>
          </Link>*/}
        </section>
        {/*
        <section className='SideTab-item'>
          <h6>依種類點歌</h6>
          <li>搖滾</li>
          <li>嘻哈R&B</li>
          <li>電子</li>
          <li>爵士</li>
        </section>
        */}
      </div>
    );
  }

  _renderArtistsList() {
    return (
      <div>
      <Link to='/songbook/male' activeClassName="is-current">
        <li>男歌手</li>
      </Link>
      <Link to='/songbook/female' activeClassName="is-current">
        <li>女歌手</li>
      </Link>
      <Link to='/songbook/group' activeClassName="is-current">
        <li>團體</li>
      </Link>
      </div>
    );
  }
}
