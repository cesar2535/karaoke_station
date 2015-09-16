import React, { Component, PropTypes } from 'react';
import ClassNames from 'classnames';
import * as Config from '../constants/Config';

export default class PrepareTodoPanel extends Component {
  render() {
    const { className, addBtn, insertBtn, addFavoriteBtn, removeBtn, removeFavoriteBtn } = this.props;
    const displayAddBtn = addBtn === Config.ADD_BUTTOM ? '' : 'PanelHidden';
    const displayInsertBtn = insertBtn === Config.INSERT_BUTTOM ? '' : 'PanelHidden';
    const displayAddFavoriteBtn = addFavoriteBtn === Config.ADD_FAVORITE_BUTTOM ? '' : 'PanelHidden';
    const displayRemoveBtn = removeBtn === Config.REMOVE_BUTTOM ? '' : 'PanelHidden';
    const displayRemoveFavoriteBtn = removeFavoriteBtn === Config.REMOVE_FAVORITE_BUTTOM ? '' : 'PanelHidden';
    return (
      <div className={className}>
        <a href='/' className={ `${className}--btn-add ${displayAddBtn}`}>
          <ic className='ic ic_action_requesting' />
          <p>點播</p>
        </a>
        <a href='/' className={ `${className}--btn-insert ${displayInsertBtn}`}>
          <ic className='ic ic_action_inserting' />
          <p>插播</p>
        </a>
        <a href='/' className={ `${className}--btn-add-favorite ${displayAddFavoriteBtn}`}>
          <ic className='ic ic_action_favortie' />
          <p>加入最愛</p>
        </a>
        <a href='/' className={ `${className}--btn-remove ${displayRemoveBtn}`}>
          <ic className='ic ic_action_remove' />
          <p>刪歌</p>
        </a>
        <a href='/' className={ `${className}--btn-remove-favorite ${displayRemoveFavoriteBtn}`}>
          <ic className='ic ic_action_remove' />
          <p>移除最愛</p>
        </a>
      </div>
    );
  }
}
