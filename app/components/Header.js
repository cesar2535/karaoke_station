import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import LOGO_IMG from '../assets/images/img_topbar_ktvStation.png';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className={`Header`}>
        <div className={`Header-left`}>
          <Link className={`Header-logo`} to={`/`}>
            <img src={LOGO_IMG} alt="Logo" />
          </Link>
        </div>
        <div className={`Header-right`}>
          <button className={`Header-btn ic ic_topbar_Search_normal`} onClick={this.props.toggleSearch} />
        </div>
      </header>
    );
  }
}

export default Header;
