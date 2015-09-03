import React, { Component, PropTypes } from 'react';

export default class List extends Component {
  static propTypes = {
    loadingLabel: PropType.string.isRequired,
    pageCount: PropTypes.number,
    renderItem: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired
  }

  static defaultProps = {
    isFetching: true,
    loadingLabel: `Loading...`
  }

  render() {
    const {
      isFetching, pageCount, items, renderItem, loadingLabel
    } = this.props;

    const isEmpty = items.length === 0;
    if (isEmpty && isFetching) {
      return (
        <h2><i>{loadingLabel}</i></h2>
      );
    }

    return (
      <div>
        {item.map(renderItem)}
      </div>
    );
  }
}
