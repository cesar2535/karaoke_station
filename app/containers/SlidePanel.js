import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { connect } from 'react-redux';
import ClassNames from 'classnames';

import SearchForm from '../components/SearchForm';

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
