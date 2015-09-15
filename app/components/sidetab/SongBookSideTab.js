import React, { Component, PropTypes } from 'react';

export default class SideTab extends Component {
  render() {
    const { className } = this.props;
    return (
      <div className={className}>
        <section className='SideTab-item'>
          <h6>歌星點歌</h6>
          <li>男歌手</li>
          <li>女歌手</li>
          <li>團體</li>
        </section>
        <section className='SideTab-item'>
          <h6>依語言點歌</h6>
          <li>中文</li>
          <li>英文</li>
          <li>粵語</li>
          <li>台語</li>
          <li>日語</li>
          <li>韓語</li>
          <li>西班牙語</li>
          <li>其他語言</li>
        </section>
        <section className='SideTab-item'>
          <h6>依種類點歌</h6>
          <li>搖滾</li>
          <li>嘻哈R&B</li>
          <li>電子</li>
          <li>爵士</li>
        </section>

      </div>
    );
  }
}
