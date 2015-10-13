import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import List from '../components/List';
import SideNav from '../components/SideNav';
import Filter from '../components/Filter';
import Pager from '../components/Pager';

import { loadHistory } from '../actions/playlist';

class HistoryPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`Page Page--history`}>
        <SideNav />
        <div className={`Page-content`}>
          <Filter />
          <div className={`Page-main`}>
            <h1>{`歷史紀錄`}</h1>
            <div className={`History History--w620`}>
              <div className={`History-head`}>
                <div>歌名</div>
                <div>演唱者</div>
                <div>時間</div>
              </div>
              <List className={`List--history History-body`}
                    items={[]}
                    renderItem={this.renderListItem.bind(this)}
                    isFetching={true} />
            </div>
          </div>
          <Pager />
        </div>
      </div>
    );
  }

  renderListItem(item, index) {

  }
}

function mapStateToProps(state, ownProps) {
  return {

  };
}

export default connect(mapStateToProps)(HistoryPage);
