import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { connect } from 'react-redux';
import ClassNames from 'classnames';

import SearchForm from '../components/SearchForm';
import List from '../components/List';

class SlidePanel extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.addEventListener('click', this.togglePanel.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.togglePanel.bind(this));
  }

  render() {
    const { className } = this.props;
    return (
      <div ref='panel' className={className}>
        <div className={`SlideContainer`} onClick={this.stopPropagation.bind(this)}>
          <SearchForm options={[{label: '歌手', value: 'artist'}, {label: '歌曲', value: 'song'}]} onSubmit={ (evt, result) => console.log(evt, result)} />
        </div>
      </div>
    );
  }

  togglePanel(evt) {
    const { panel } = this.refs;
    findDOMNode(panel).classList.remove('is-visible');
  }

  stopPropagation(evt) {
    evt.stopPropagation();
    evt.nativeEvent.stopImmediatePropagation();
  }
}

function mapStateToProps(state, ownProps) {
  return {

  };
}

export default connect(mapStateToProps)(SlidePanel);
