import React, { Component, PropTypes } from 'react';
import ClassNames from 'classnames';

class FooterButton extends Component {
  static propTypes = {
    icon: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { icon, text, onClick } = this.props;
    const btnClass = ClassNames('Footer-button-icon', 'ic', icon);

    return (
      <button className="Footer-button" onClick={onClick}>
        <span className={btnClass} />
        <span className="Footer-button-text">{text}</span>
      </button>
    );
  }
}

export default FooterButton;
