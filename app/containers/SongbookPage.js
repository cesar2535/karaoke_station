import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { ROOT } from '../constants/Config';

import SideNav from '../components/SideNav';
import List from '../components/List';

import { loadArtistTypes, loadLangs } from '../actions/songslist';

function loadData(props) {
  props.loadArtistTypes();
  props.loadLangs();
}

class SongbookPage extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    loadData(this.props);
  }

  render() {
    const { children } = this.props;
    return (
      <div className={`Page Page--songbook`}>
        <SideNav />
        {this.renderTabs()}
        {children}
      </div>
    );
  }

  renderTabs() {
    return (
      <div className={`SideTab`}>
        {this.renderArtistTypes(this.props)}
        {this.renderLangs(this.props)}
      </div>
    )
  }

  renderArtistTypes(props) {
    const { artistTypes } = props;
    return (
      <div className={`SideTab-block`}>
        <div className={`SideTab-title`}>
          <span className={`ic ic_submenu_requestbook`}>依歌星點歌</span>
        </div>
        <div className={`SideTab-list`}>
          {artistTypes.ids.map(this.renderArtistType.bind(this))}
        </div>
      </div>
    );
  }

  renderArtistType(item, index) {
    return (
      <Link key={index} className={`SideTab-link`} to={`${ROOT}/songbook/artists`} query={{ type: item }} activeClassName={`is-current`}>
        {item}
      </Link>
    )
  }

  renderLangs(props) {
    const { langs } = props;
    return (
      <div className={`SideTab-block`}>
        <div className={`SideTab-title`}>
          <span className={`ic ic_submenu_requestbook`}>依語言點歌</span>
        </div>
        <div className={`SideTab-list`}>
          {langs.ids.map(this.renderLang.bind(this))}
        </div>
      </div>
    );
  }

  renderLang(item, index) {
    return (
      <Link key={index} className={`SideTab-link`} to={`${ROOT}/songbook/songs`} query={{ type: item }} activeClassName={`is-current`}>
        {item}
      </Link>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const {
    pagination: { listsElse }
  } = state;

  const artistTypes = listsElse['artistTypes'] || { ids: [] };
  const langs = listsElse['langs'] || { ids: [] };

  return {
    artistTypes,
    langs
  };
}

export default connect(mapStateToProps, { loadArtistTypes, loadLangs })(SongbookPage);
