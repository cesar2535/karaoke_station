import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { postFavoriteToQueue } from '../actions/playlist';

class Filter extends Component {
  static propTypes = {
    data: PropTypes.shape({
      favorId: PropTypes.string
    }).isRequired,
    isInFavorite: PropTypes.bool
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { className, isInFavorite } = this.props;

    const ClassName = classnames(`Filter`, className);

    return (
      <div className={ClassName}>
        {this._renderBtn(isInFavorite, { className: `Filter-btn ic ic_action_requesting`, children: '全部播放', onClick: this._addAllToQueue.bind(this) })}
        {this._renderBtn(isInFavorite, { className: `Filter-btn ic ic_action_inserting`, children: '隨機播放', onClick: this._freeToQueue.bind(this) })}
      </div>
    );
  }

  _renderBtn(display, props) {
    if (!display) {
      return ;
    }

    return (
      <button {...props}></button>
    );
  }

  _addAllToQueue(evt) {
    const { data, postFavoriteToQueue } = this.props;
    evt.stopPropagation();
    postFavoriteToQueue(data.favorId, 'False');
  }

  _freeToQueue(evt) {
    const { data, postFavoriteToQueue } = this.props;
    evt.stopPropagation();
    postFavoriteToQueue(data.favorId, 'True');
  }

}

function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {
    postFavoriteToQueue: bindActionCreators(postFavoriteToQueue, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
