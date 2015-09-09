import React, { Component, PropTypes } from 'react';
import List from './List';

export default class FavoritesList extends Component {
  static propTypes = {
    className: PropTypes.string,
    songs: PropTypes.array.isRequired
  }

  static defaultProps = {
    className: '',
    songs: []
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { className, songs } = this.props;
    return (
      <List className={`FavoritesList ${className}`}
            renderItem={this.renderFavoriteItem.bind(this)}
            item={songs} />
    );
  }

  renderFavoriteItem(song) {
    return (
      <div key={song.title} className="FavoritesList-item">
      </div>
    );
  }
}
