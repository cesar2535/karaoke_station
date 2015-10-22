import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classnames from 'classnames';

import { postSongToQueue, putSongToQueue, deleteSongFromQueue } from '../actions/playlist';
import { putSongToFavorite, deleteSongFromFavorite } from '../actions/favorite';

class ActionPanel extends Component {
  static propTypes = {
    data: PropTypes.shape({
      songId: PropTypes.string.isRequired,
      favorId: PropTypes.string
    }).isRequired,
    isInFavorite: PropTypes.bool,
    isInQueue: PropTypes.bool
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    const { isInQueue, isInFavorite, className } = this.props;
    const ClassNames = classnames('ActionPanel', className);

    return (
      <div className={ClassNames}>
        {this.renderBtn(true, { className: `ActionPanel-btn ic ic_action_requesting`, children: '點播', onClick: this.addToQueue.bind(this) })}
        {this.renderBtn(true, { className: `ActionPanel-btn ic ic_action_inserting`, children: '插播', onClick: this.insertToQueue.bind(this) })}
        {this.renderBtn(!isInFavorite, { className: `ActionPanel-btn ic ic_action_favorite`, children: '加入最愛', onClick: this.addToFavorite.bind(this) })}
        {this.renderBtn(isInQueue, { className: `ActionPanel-btn ic ic_action_remove`, children: '刪歌', onClick: this.removeFromQueue.bind(this) })}
        {this.renderBtn(isInFavorite, { className: `ActionPanel-btn ic ic_action_remove`, children: '移除最愛', onClick: this.removeFromFavorite.bind(this) })}
      </div>
    );
  }

  renderBtn(display, props) {
    if (!display) {
      return ;
    }

    return (
      <button {...props}></button>
    );
  }

  addToQueue(evt) {
    const { data, postSongToQueue } = this.props;
    evt.stopPropagation();
  }

  insertToQueue(evt) {
    const { data, putSongToQueue } = this.props;
    evt.stopPropagation();
  }

  addToFavorite(evt) {
    const { data, putSongToFavorite } = this.props;
    evt.stopPropagation();
  }

  removeFromQueue(evt) {
    const { data, deleteSongFromQueue } = this.props;
    evt.stopPropagation();
  }

  removeFromFavorite(evt) {
    const { data, deleteSongFromFavorite } = this.props;
    evt.stopPropagation();
  }
}

function mapStateToProps(state, ownProps) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {
    postSongToQueue: bindActionCreators(postSongToQueue, dispatch),
    putSongToQueue: bindActionCreators(putSongToQueue, dispatch),
    deleteSongFromQueue: bindActionCreators(deleteSongFromQueue, dispatch),
    putSongToFavorite: bindActionCreators(putSongToFavorite, dispatch),
    deleteSongFromFavorite: bindActionCreators(deleteSongFromFavorite, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionPanel);
