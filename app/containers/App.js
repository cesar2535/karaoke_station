import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';
import Footer from '../components/Footer';

class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className={`App`}>
        <Header />
        {children}
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {

  };
}

export default connect(mapStateToProps)(App);
