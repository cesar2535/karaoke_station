import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom'
import { connect } from 'react-redux';
import classnames from 'classnames';

import Header from '../components/Header';
import Footer from '../components/Footer';
import SlidePanel from './SlidePanel';

class App extends Component {
  render() {
    const { children, errorMessage } = this.props;

    if( process.env.NODE_ENV === 'production' && errorMessage ) {
      return this.renderError(errorMessage);
    }
    const ClassName = classnames(`App`, `u-theme-default`);

    return (
      <div className={ClassName}>
        <Header toggleSearch={this.toggleSearch.bind(this)} />
        {children}
        <SlidePanel ref="slidePanel" className={`SlidePanel`} />
        <Footer />
      </div>
    );
  }

  renderError(errorMessage) {
    return (
      <div className={`App`}>
        <span>{errorMessage}</span>
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
  const { errorMessage } = state;

  return {
    errorMessage
  };
}

export default connect(mapStateToProps)(App);
