import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import { ROOT } from '../constants/Config';

class SideNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <aside className={`SideNav`}>
        <Link className={`SideNav-link`} to={`${ROOT}/`}>
          <span className={`ic ic_menu_home`} />
          <p>首頁</p>
        </Link>
        <Link className={`SideNav-link`} to={`${ROOT}/`}>
          <span className={`ic ic_menu_favorite`} />
          <p>最愛歌曲</p>
        </Link>
        <Link className={`SideNav-link`} to={`${ROOT}/`}>
          <span className={`ic ic_menu_requestbook`} />
          <p>點歌本</p>
        </Link>
        <Link className={`SideNav-link`} to={`${ROOT}/playlist`} activeClassName={`is-current`}>
          <span className={`ic ic_menu_requestinglist`} />
          <p>點歌清單</p>
        </Link>
        <Link className={`SideNav-link`} to={`${ROOT}/history`} activeClassName={`is-current`}>
          <span className={`ic ic_menu_history`} />
          <p>歷史紀錄</p>
        </Link>
      </aside>
    );
  }
}

export default SideNav;
