import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom'
import { connect } from 'react-redux';

import Header from '../components/Header';
import Footer from '../components/Footer';
import SlidePanel from './SlidePanel';

class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className={`App`}>
        <Header toggleSearch={this.toggleSearch.bind(this)} />
        {children}
        <SlidePanel ref="slidePanel" className={`SlidePanel`} />
        <Footer />
      </div>
    );
  }

  toggleSearch(evt) {
    const { slidePanel } = this.refs;
    findDOMNode(slidePanel).classList.toggle('is-visible');
    evt.stopPropagation();
    evt.nativeEvent.stopImmediatePropagation();
  }
}

function mapStateToProps(state, ownProps) {
  return {

  };
}

export default connect(mapStateToProps)(App);
