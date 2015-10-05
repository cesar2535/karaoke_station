import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import { LOCALHOST } from '../constants/Config';

class SideNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <aside className={`SideNav`}>
        <Link className={`SideNav-link`} to={`${LOCALHOST}/`}>
          <span className={`ic ic_menu_home`} />
          <span>首頁</span>
        </Link>
        <Link className={`SideNav-link`} to={`${LOCALHOST}/`}>
          <span className={`ic ic_menu_favorite`} />
          <span>最愛歌曲</span>
        </Link>
        <Link className={`SideNav-link`} to={`${LOCALHOST}/`}>
          <span className={`ic ic_menu_requestbook`} />
          <span>點歌本</span>
        </Link>
        <Link className={`SideNav-link`} to={`${LOCALHOST}/`}>
          <span className={`ic ic_menu_requestinglist`} />
          <span>點歌清單</span>
        </Link>
        <Link className={`SideNav-link`} to={`${LOCALHOST}/`}>
          <span className={`ic ic_menu_history`} />
          <span>歷史紀錄</span>
        </Link>
      </aside>
    );
  }
}

export default SideNav;
