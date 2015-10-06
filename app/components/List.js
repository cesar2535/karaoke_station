import React, { Component, PropTypes } from 'react';
import ClassNames from 'classnames';
import spinnerImg from '../assets/images/spinner.svg';

class List extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    renderItem: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    onLoadMoreClick: PropTypes.func.isRequired,
    pageCount: PropTypes.number
  }

  static defaultProps = {
    isFetching: true
  }

  constructor(props) {
    super(props);
  }

  render() {
    const {
      items, renderItem, loadingLabel,
      isFetching, pageCount, className
    } = this.props;

    const classes = ClassNames(`List`, className);
    const isEmpty = items.length === 0;

    if (isEmpty && isFetching) {
      return (
        <div className={classes}>
          {this.renderSpinner(isFetching)}
        </div>
      );
    } else if (isEmpty) {
      return (
        <div className={classes}>
          <h2><i>No Content</i></h2>
        </div>
      );
    }

    return (
      <div className={classes}>
        {this.renderSpinner(isFetching)}
        {items.map(renderItem)}
      </div>
    );
  }

  renderSpinner(isFetching) {
    return (
      <img className={`Spinner`} src={spinnerImg} alt='Loading' />
    );
  }

  renderLoadMore() {
    const { isFetching, onLoadMoreClick } = this.props;
  }
}

export default List;
