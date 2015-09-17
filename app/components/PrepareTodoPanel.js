import React, { Component, PropTypes } from 'react';
import ClassNames from 'classnames';
import * as Config from '../constants/Config';

export default class PrepareTodoPanel extends Component {
  render() {
    const { className, addBtn, insertBtn, addFavoriteBtn, removeBtn, removeFavoriteBtn, favoriteIds, songId, addPlay, insertPlay, addFavorite } = this.props;
    const displayAddBtn = addBtn === Config.ADD_BUTTOM ? '' : 'PanelHidden';
    const displayInsertBtn = insertBtn === Config.INSERT_BUTTOM ? '' : 'PanelHidden';
    const displayAddFavoriteBtn = addFavoriteBtn === Config.ADD_FAVORITE_BUTTOM ? '' : 'PanelHidden';
    const displayRemoveBtn = removeBtn === Config.REMOVE_BUTTOM ? '' : 'PanelHidden';
    const displayRemoveFavoriteBtn = removeFavoriteBtn === Config.REMOVE_FAVORITE_BUTTOM ? '' : 'PanelHidden';
    return (
      <div className={className}>
        <a className={ `${className}--btn-add ${displayAddBtn}`} onClick={() => addPlay(songId)}>
          <ic className='ic ic_action_requesting' />
          <p>點播</p>
        </a>
        <a className={ `${className}--btn-insert ${displayInsertBtn}`} onClick={ () => insertPlay(songId)}>
          <ic className='ic ic_action_inserting' />
          <p>插播</p>
        </a>
        <a className={ `${className}--btn-add-favorite ${displayAddFavoriteBtn}`} onClick={ () => addFavorite(songId, favoriteId)}>
          <ic className='ic ic_action_favortie' />
          <p>加入最愛</p>
        </a>
        <a className={ `${className}--btn-remove ${displayRemoveBtn}`} onClick={ () => this.unComplete() }>
          <ic className='ic ic_action_remove' />
          <p>刪歌</p>
        </a>
        <a className={ `${className}--btn-remove-favorite ${displayRemoveFavoriteBtn}`} onClick={ () => this.unComplete() }>
          <ic className='ic ic_action_remove' />
          <p>移除最愛</p>
        </a>
      </div>
    );
  }

  unComplete() {
    console.log('還沒做唷');
  }
}
