import React, { Component, PropTypes } from 'react';
import ClassNames from 'classnames';

export default class PrepareTodoPanel extends Component {
  render() {
    const { className } = this.props;

    return (
      <div className={className}>
        <a href='/' className={ `${className}--btn-add`}>
          <ic className='ic ic_action_requesting' />
          <p>點播</p>
        </a>
        <a href='/' className={ `${className}--btn-insert`}>
          <ic className='ic ic_action_inserting' />
          <p>插播</p>
        </a>
        <a href='/' className={ `${className}--btn-add-favorite`}>
          <ic className='ic ic_action_favortie' />
          <p>加入最愛</p>
        </a>
        <a href='/' className={ `${className}--btn-remove`}>
          <ic className='ic ic_action_remove' />
          <p>刪歌</p>
        </a>
        <a href='/' className={ `${className}--btn-remove-favorite`}>
          <ic className='ic ic_action_remove' />
          <p>移除最愛</p>
        </a>
      </div>
    );
  }
}
