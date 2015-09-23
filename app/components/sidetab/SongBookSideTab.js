import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { mapTitleNameByType, mapTitleNameFromLanguage } from '../../constants/FakeData';
import { QTS_ROOT } from '../../constants/Config';

export default class SideTab extends Component {
  render() {
    const { className, artistsList, loadArtistsListByGender, languages, loadSongsList } = this.props;
    return (
      <div className={className}>
        <section className='SideTab-item'>
          <h6>歌星點歌</h6>
            {artistsList.map( (artists, index) => {
              const to = QTS_ROOT + 'songbook/' + artists;
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
              const to = QTS_ROOT + 'songbook/language/' + language;
              const showName = mapTitleNameFromLanguage(language);
              return (
                <Link key={index} to={to} activeClassName="is-current" onClick={ () => loadSongsList(undefined, undefined, undefined, undefined, 1, 80, language) } >
                  <li>{showName}</li>
                </Link>
              );
            })
          }
        </section>
      </div>
    );
  }
}
