import React, { Component, PropTypes } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { ROOT, MODAL_STYLE } from '../constants/Config';

import List from '../components/List';
import SideNav from '../components/SideNav';
import Filter from '../components/Filter';
import Pager from '../components/Pager';
import ActionPanel from '../components/ActionPanel';

import { loadSongsFromFavorite, loadListFromFavorite } from '../actions/favorite';

function loadData(props) {
  return props.loadListFromFavorite();
}

class FavoritePage extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { favorId, history } = this.props;
    loadData(this.props).then( result => {
      const { response: { entities: { lists } } } = result
      if ( !favorId ) {
        history.replaceState(null, `${ROOT}/favorite?favorId=${1}&favorName=${lists[1].name}`);
      }
    });
    this.loadSongs(this.props);
    this.showModal = false;
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if ( !nextProps.favorId ) {
      return nextProps.history.replaceState(null, `${ROOT}/favorite?favorId=${1}&favorName=${nextProps.listsInFavorite[0].name}`);
    }

    if (nextProps.favorId !== this.props.favorId) {
      this.loadSongs(nextProps);
    }
  }

  render() {
    const { favorName, favoriteInfo, listsInFavorite, listInfo, songsInFavorite } = this.props;
    return (
      <div className={`Page Page--favorite`}>
        <SideNav />
        {this.renderTabs(listsInFavorite)}
        <div className={`Page-content`}>
          <Filter />
          <section className={`Page-main`}>
            <h1>{favorName}</h1>
            <div className={`Favorite Favorite--w620`}>
              <div className={`Favorite-head`}>
                <div>歌名</div>
                <div>演唱者</div>
              </div>
              <List className={`List--favorite Favorite-body`}
                    items={songsInFavorite}
                    renderItem={this.renderListItem.bind(this)}
                    isFetching={listInfo.isFetching} />
            </div>
          </section>
          <Pager currentLen={songsInFavorite.length} totalLen={listInfo.total} />
        </div>
        <Modal
          ariaHideApp={false}
          style={MODAL_STYLE}
          isOpen={false}
          closeTimeoutMS={150} >
          <button className="Modal-close" onClick={this._closeEditModal.bind(this)}>X</button>
          <h4 className="Modal-head4">重新命名</h4>
          <form onSubmit={this._handleSubmit.bind(this)}>
            <input ref="editFavoriteInputSection" className="Modal-input" onChange={ (event) => this._handleInputChange(event)} defaultValue="這不是肯德基" />
            <button type="submit" className="Modal-buttom">確定</button>
            <button className="Modal-buttom" onClick={ () => this._closeEditModal() }>取消</button>
          </form>
        </Modal>
      </div>
    );
  }

  renderTabs(listsInFavorite) {
    return (
      <div className={`SideTab`}>
        {listsInFavorite.map(this.renderTabItem.bind(this))}
      </div>
    );
  }

  renderTabItem(item, index) {
    return (
      <Link key={index} className={`SideTab-link`} to={`${ROOT}/favorite`} query={{ favorId: item.id, favorName: item.name }} activeClassName={`is-current`}>
        <div>
          <span>{`${item.name}`}</span>
          <span>{` (${item.nSongs})`}</span>
          <span className="ic ic_submenu_rename SideTab-link--edit" onClick={this._openEditModal.bind(this)} />
        </div>
      </Link>
    );
  }

  renderListItem(item, index) {
    const { favorId } = this.props;
    return (
      <div key={index} className={`Song`} onClick={this.toggleActionPanel.bind(this)}>
        <div className={`Song-info`}>
          <span>{item.name}</span>
          <span>{item.artist}</span>
        </div>
        <ActionPanel data={{ songId: item.id, favorId }} isInFavorite={true} />
      </div>
    );
  }

  toggleActionPanel(evt) {
    evt.currentTarget.classList.toggle('is-expanded');
    evt.currentTarget.classList.toggle('is-selected');
  }

  loadSongs(props) {
    const { favorId } = props;
    if (favorId) {
      props.loadSongsFromFavorite(favorId);
    }
  }

  _handleSubmit() {
    console.log('Submit Yo!!!');
  }

  _handleInputChange(event) {
    this.setState({favoriteModalInputValue: event.target.value});
  }

  _closeEditModal() {
    this.showModal = false;
  }

  _openEditModal() {
    this.showModal = true;
  }
}

function mapStateToProps(state, ownProps) {
  const { query: { favorId, favorName } } = ownProps.location;
  const {
    pagination: { listsElse, songsFromFavorite },
    entities: { lists, songs }
  } = state;

  const favoriteInfo = listsElse['favorite'] || { ids: [] };
  const listsInFavorite = favoriteInfo.ids.map(id => lists[id]);
  const listInfo = songsFromFavorite[favorId] || { ids: [] };
  const songsInFavorite = listInfo.ids.map(id => songs[id]);


  return {
    favorId,
    favorName,
    favoriteInfo,
    listsInFavorite,
    listInfo,
    songsInFavorite
  };
}

export default connect(mapStateToProps, { loadSongsFromFavorite, loadListFromFavorite })(FavoritePage);
