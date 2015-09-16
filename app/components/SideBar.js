import React, { Component } from 'react';
import { Link } from 'react-router';

export default class SideBar extends Component {
  render() {
    const { className } = this.props;
    return (
      <section className={className}>
        <Link className='SideBarItem' to='/'>
          <ic className='ic ic_menu_home'></ic>
          <p>首頁</p>
        </Link>
        <section className='SideBarItem'>
          <ic className='ic ic_menu_favoraite'></ic>
          <p>最愛歌曲</p>
        </section>
        <Link className='SideBarItem' to='/songbook/male' activeClassName="is-current">
          <ic className='ic ic_menu_reguestbook'></ic>
          <p>點歌本</p>
        </Link>
        <Link className='SideBarItem' to='/playlist' activeClassName="is-current">
          <ic className='ic ic_menu_requestinglist'></ic>
          <p>點歌清單</p>
        </Link>
        <section className='SideBarItem'>
          <ic className='ic ic_menu_history'></ic>
          <p>歷史紀錄</p>
        </section>
      </section>
    );
  }
}
