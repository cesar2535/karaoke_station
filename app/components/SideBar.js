import React, { Component } from 'react';
import { Link } from 'react-router';

export default class SideBar extends Component {
  render() {
    const { className } = this.props;
    return (
      <section className={className}>
        <Link className='SideBarItem' to='/'>
          <span className='ic ic_menu_home'></span>
          <p>首頁</p>
        </Link>
        <section className='SideBarItem'>
          <span className='ic ic_menu_favoraite'></span>
          <p>最愛歌曲</p>
        </section>
        <Link className='SideBarItem' to='/songbook' activeClassName="is-current">
          <span className='ic ic_menu_reguestbook'></span>
          <p>點歌本</p>
        </Link>
        <Link className='SideBarItem' to='/playlist' activeClassName="is-current">
          <span className='ic ic_menu_requestinglist'></span>
          <p>點歌清單</p>
        </Link>
        <Link className='SideBarItem' to="/history" activeClassName="is-current">
          <span className='ic ic_menu_history'></span>
          <p>歷史紀錄</p>
        </Link>
      </section>
    );
  }
}
