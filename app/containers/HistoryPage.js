import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import moment from 'moment';

import List from '../components/utils/List';
import SideBar from '../components/SideBar';
import ListNav from '../components/ListNav';
import ListPager from '../components/ListPager';

import { loadHistory } from '../actions/history';

function loadData(props) {
  props.loadHistory();
}

class HistoryPage extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    loadData(this.props);
  }

  render() {
    const { history } = this.props;
    return (
      <section className="Main Main--history">
        <SideBar className="SideBar" />
        <div className="Main-wrapper Main-wrapper--history">
          <ListNav className="ListNav ListNav--history" />
          <h1 className="Main-wrapper-title">歷史紀錄</h1>
          <div className="HistoryView">
            <div className="HistoryView-head">
              <span>歌名</span>
              <span>演唱者</span>
              <span>時間</span>
            </div>
            <List className="HistoryView-body" items={history} renderItem={this._renderHistoryItem.bind(this)} />
          </div>
          <ListPager className="ListPager--history" total={history.length} />
        </div>
      </section>
    )
  }

  _renderHistoryItem(song, index) {
    return (
      <div key={index} className="HistoryItem">
        <span className="HistoryItem-title">{song.name}</span>
        <span className="HistoryItem-artist">{song.artist}</span>
        <span className="HistoryItem-date">{moment(Date(song.date)).format('YYYY-MM-DD HH:mm')}</span>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const {
    pagination: { playlist },
    entities: { songs }
  } = state;

  const songsInHistory = playlist['history'] || { ids: [] };
  const history = songsInHistory.ids.map( id => songs[id] );

  return {
    history,
    songsInHistory
  };
}

export default connect(mapStateToProps, { loadHistory })(HistoryPage);
