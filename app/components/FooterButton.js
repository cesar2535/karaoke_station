import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

class FooterButton extends Component {
  static propTypes = {
    icon: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { icon, text } = this.props;
    const btnClass = classnames('Footer-button-icon', 'ic', icon);

    return (
      <div className="Footer-button">
        <span className={btnClass} />
        <span className="Footer-button-text">{text}</span>
      </div>
    );
  }
}

export default FooterButton;
