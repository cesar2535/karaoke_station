import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class SideTab extends Component {
  render() {
    const { className } = this.props;
    return (
      <div className={className}>
        <section className='SideTab-item'>
          <h6>歌星點歌</h6>
          <Link className='SideTab-item' to='/songbook/male'>
            <li>男歌手</li>
          </Link>
          <Link className='SideTab-item' to='/songbook/female'>
            <li>女歌手</li>
          </Link>
          <Link className='SideTab-item' to='/songbook/group'>
            <li>團體</li>
          </Link>
        </section>
        <section className='SideTab-item'>
          <h6>依語言點歌</h6>
          <Link className='SideTab-item' to='/songbook/language/tc'>
            <li>中文</li>
          </Link>
          <Link className='SideTab-item' to='/songbook/language/e'>
            <li>英文</li>
          </Link>
          <Link className='SideTab-item' to='/songbook/language/c'>
            <li>粵語</li>
          </Link>
          <Link className='SideTab-item' to='/songbook/language/t'>
           <li>台語</li>
          </Link>
          <Link className='SideTab-item' to='/songbook/language/j'>
            <li>日語</li>
          </Link>
          <Link className='SideTab-item' to='/songbook/language/k'>
            <li>韓語</li>
          </Link>
          <Link className='SideTab-item' to='/songbook/language/eo'>
            <li>西班牙語</li>
          </Link>
          <Link className='SideTab-item' to='/songbook/language/other'>
            <li>其他語言</li>
          </Link>
        </section>
        {/*
        <section className='SideTab-item'>
          <h6>依種類點歌</h6>
          <li>搖滾</li>
          <li>嘻哈R&B</li>
          <li>電子</li>
          <li>爵士</li>
        </section>
        */}
      </div>
    );
  }
}
