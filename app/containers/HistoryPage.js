import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import moment from 'moment';

import List from '../components/List';
import SideNav from '../components/SideNav';
import Filter from '../components/Filter';
import Pager from '../components/Pager';
import ActionPanel from '../components/ActionPanel';

import { loadHistory } from '../actions/playlist';

class HistoryPage extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.loadHistory();
  }

  render() {
    const { historyInfo, songsInHistory } = this.props;
    return (
      <div className={`Page Page--history`}>
        <SideNav />
        <div className={`Page-content`}>
          <Filter />
          <div className={`Page-main`}>
            <h1>{`歷史紀錄`}</h1>
            <div className={`History History--w60`}>
              <div className={`History-head`}>
                <div>歌名</div>
                <div>演唱者</div>
                <div>時間</div>
              </div>
              <List className={`List--history History-body`}
                    items={songsInHistory}
                    renderItem={this.renderListItem.bind(this)}
                    isFetching={historyInfo.isFetching}
                    onLoadMore={this.loadMore.bind(this)} />
            </div>
          </div>
          <Pager currentLen={songsInHistory.length} totalLen={historyInfo.total} />
        </div>
      </div>
    );
  }

  renderListItem(item, index) {
    return (
      <div key={index} className={`Song`}>
        <div className={`Song-info`}>
          <span>{item.name}</span>
          <span>{item.artist}</span>
          <span>{moment.unix(item.date).format('YYYY/MM/DD HH:mm')}</span>
        </div>
        <ActionPanel data={{ songId: item.id }} />
      </div>
    );
  }

  loadMore(evt) {
    const { songsInHistory, historyInfo, loadHistory } = this.props;
    if ( songsInHistory.length >= historyInfo.total ) {
      return ;
    }
    loadHistory(historyInfo.page + 1, 20);
  }
}

function mapStateToProps(state, ownProps) {
  const {
    pagination: { songsFromPlaylist },
    entities: { songsByDate }
  } = state;

  const historyInfo = songsFromPlaylist['history'] || { ids: [], page: 0 };
  const songsInHistory = historyInfo.ids.map(id => songsByDate[id]);

  return {
    historyInfo,
    songsInHistory
  };
}

export default connect(mapStateToProps, { loadHistory })(HistoryPage);
