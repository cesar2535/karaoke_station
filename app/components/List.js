import React, { Component, PropTypes } from 'react';

class List extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    renderItem: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    onLoadMoreClick: PropTypes.func.isRequired,
    pageCount: PropTypes.number
  }

  static defaultProps = {
    isFetching: true,
    loadingLabel: `Loading...`
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { 
      items, renderItem, loadingLabel,
      isFetching, pageCount 
    } = this.props;

    const isEmpty = items.length === 0;
    if (isEmpty && isFetching) {
      return <h2><i>{loadingLabel}</i></h2>
    }

    return (
      <div>
        {items.map(renderItem)}
      </div>
    );
  }

  renderLoadMore() {
    const { isFetching, onLoadMoreClick } = this.props;
  }
}

export default List;
