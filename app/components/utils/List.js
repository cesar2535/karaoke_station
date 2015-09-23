import React, { Component, PropTypes } from 'react';

export default class List extends Component {
  static propTypes = {
    className: PropTypes.string,
    loadingLabel: PropTypes.string.isRequired,
    pageCount: PropTypes.number,
    renderItem: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired
  }

  static defaultProps = {
    className: '',
    isFetching: true,
    loadingLabel: `Loading...`
  }

  render() {
    const {
      isFetching, pageCount, items, renderItem, loadingLabel, className, noTip
    } = this.props;

    const isEmpty = items.length === 0;

    if (isEmpty && noTip) {
      return <span />;
    }
    
    if (isEmpty && isFetching) {
      return (
        <h2><i>{loadingLabel}</i></h2>
      );
    } else if (isEmpty) {
      return (
        <h2><i>No Content</i></h2>
      )
    }

    return (
      <div className={className}>
        {items.map(renderItem)}
      </div>
    );
  }
}
