import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import SideBar from '../components/SideBar';
import SideTab from '../components/SideTab';
import ListNav from '../components/ListNav';
import ListPager from '../components/ListPager';

import * as actions from '../actions/favorites';

function loadData(props) {

}

class FavoritesPage extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    loadData(this.props);
  }

  render() {
    return (
      <section className="Main Main--favorites">
        <SideBar className="SideBar" />
        <div className="Main-wrapper Main-wrapper--favorites">
        </div>
      </section>
    )
  }
}

function mapStateToProps(state, ownProps) {
  const {
    pagination: { favorites }
  } = state;

  return {

  };
}

export default connect(mapStateToProps, { ...actions })(FavoritesPage);
