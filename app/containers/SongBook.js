import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import SongBookList from '../components/SongBookList';

class SongBook extends Component {
  static propTypes = {

  }

  static defaultProps = {

  }

  constructor(props) {
    super(props);
  }

  render() {
    const { songs, artists, params } = this.props;
    // console.log(this.props);
    return (
      <div className="Main-wrapper">
        <SongBookList className="Playlist--home" songs={songs} artists={artists} type={params.type} />
      </div>
    );
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

  const artists = [{
    name: '劉德華'
  }, {
    name: '阿信'
  }, {
    name: '伍百'
  }, {
    name: '羅百吉'
  }, {
    name: '王力宏'
  }, {
    name: '林俊傑'
  }, {
    name: '林志炫'
  }, {
    name: '楊宗緯'
  }, {
    name: '林宥嘉'
  }];

  return {
    songs: songs,
    artists: artists
  };
}

export default connect(mapStateToProps)(SongBook);
