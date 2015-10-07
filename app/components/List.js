import React, { Component, PropTypes, findDOMNode } from 'react';
import ClassNames from 'classnames';
import debounce from 'lodash/function/debounce';
import throttle from 'lodash/function/throttle';
import spinnerImg from '../assets/images/spinner.svg';

class List extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    renderItem: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    onLoadMore: PropTypes.func,
    pageCount: PropTypes.number
  }

  static defaultProps = {
    isFetching: true
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {

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
      <div ref="list" className={classes} onScroll={debounce(this.handleScroll.bind(this), 1000)}>
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

  handleScroll(evt) {
    const { onLoadMore } = this.props
    const list = findDOMNode(this.refs.list);

    if (typeof onLoadMore !== 'function') {
      return;
    }

    if (list.scrollTop > list.scrollHeight - list.clientHeight - 100) {
      onLoadMore(evt);
    }
  }
}

export default List;
