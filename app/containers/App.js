import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { bindActionCreators } from 'redux';
import * as PlayerActions from '../actions/PlayerActionCreators';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, player, playState } = this.props;
    return (
      <div>
        <Header />
        {children}
        <Footer player={player} playState={playState} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    playState: state.player.status
  };
}

function mapDispatchToProps(dispatch) {
  return {
    player: bindActionCreators(PlayerActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
