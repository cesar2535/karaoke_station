import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Playlist from '../components/Playlist';

class HomePage extends Component {
  static propTypes = {

  }

  static defaultProps = {

  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Main-wrapper">
        {this._renderPlaylist()}
      </div>
    );
  }

  _renderPlaylist() {
    const { songs } = this.props;
    return (
      <div className="Main-wrapper-playlist">
        <h1>
          <span className="ic ic_menu_requestinglist" />
          點歌清單
        </h1>
        <Playlist className="Playlist--home" songs={songs} />
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  const songs = [{
    title: 'Gravity',
    artist: 'Against The Current'
  }, {
    title: 'Roar',
    artist: 'Katy Perry'
  }, {
    title: 'Paralyzed',
    artist: 'Against The Current'
  }, {
    title: 'Nie vergessen',
    artist: 'Glasperlenspiel'
  }, {
    title: 'Ich bin ich',
    artist: 'Glasperlenspiel'
  }, {
    title: 'Make It Up',
    artist: 'Sam Tsui'
  }];

  return {
    songs: songs
  };
}

export default connect(mapStateToProps)(HomePage);
