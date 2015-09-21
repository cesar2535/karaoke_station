import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import SideBar from '../components/SideBar';
import SideTab from '../components/SideTab';
import ListNav from '../components/ListNav';
import ListPager from '../components/ListPager';

function loadData(props) {

}

class HistoryPage extends Component {
  static propTypes = {

  }

  static defaultProps = {

  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="Main Main--history">
        <SideBar className="SideBar" />
        <div className="Main-wrapper Main-wrapper--history">
        </div>
      </section>
    )
  }
}

export default HistoryPage;
