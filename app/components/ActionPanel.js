import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classnames from 'classnames';

import { postSongToQueue, putSongToQueue, deleteSongFromQueue } from '../actions/playlist';
import { putSongToFavorite, deleteSongFromFavorite } from '../actions/favorite';

class ActionPanel extends Component {
  static propTypes = {
    data: PropTypes.shape({
      songId: PropTypes.number.isRequired,
      favorId: PropTypes.string,
      index:PropTypes.number
    }).isRequired,
    isInFavorite: PropTypes.bool,
    isInQueue: PropTypes.bool,
    onAddToQueue: PropTypes.func,
    onInsertToQueue: PropTypes.func,
    onAddToFavorite: PropTypes.func,
    onRemoveFromQueue: PropTypes.func,
    onRemoveFromFavorite: PropTypes.func
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
    const { data, postSongToQueue, onAddToQueue } = this.props;
    evt.stopPropagation();
    if (typeof onAddToQueue === 'function') {
      return onAddToQueue(evt, data, postSongToQueue);
    }

    return postSongToQueue(data.songId)
  }

  insertToQueue(evt) {
    const { data, putSongToQueue, onInsertToQueue } = this.props;
    evt.stopPropagation();
    if (typeof onInsertToQueue === 'function') {
      return onInsertToQueue(evt, data, putSongToQueue);
    }

    return putSongToQueue(data.songId);
  }

  addToFavorite(evt) {
    const { data, putSongToFavorite, onAddToFavorite } = this.props;
    evt.stopPropagation();
    if (typeof onAddToFavorite === 'function') {
      return onAddToFavorite(evt, data, putSongToFavorite);
    }

    return putSongToFavorite(data.favorId, data.songId);
  }

  removeFromQueue(evt) {
    const { data, deleteSongFromQueue, onRemoveFromQueue } = this.props;
    evt.stopPropagation();

    if (typeof onRemoveFromQueue === 'function') {
      return onRemoveFromQueue(evt, data, deleteSongFromQueue);
    }

    return deleteSongFromQueue(data.songId, data.index);
  }

  removeFromFavorite(evt) {
    const { data, deleteSongFromFavorite, onRemoveFromFavorite } = this.props;
    evt.stopPropagation();
    if (typeof onRemoveFromFavorite === 'function') {
      return onRemoveFromFavorite(evt, data, deleteSongFromFavorite);
    }

    return deleteSongFromFavorite(data,favorId, data.songId);
  }
}

function mapStateToProps(state) {
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
