import React, { Component, PropTypes } from 'react';

class FooterButton extends Component {
  static propTypes = {
    icon: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }

  static defaultProps = {

  }

  constructor(props) {
    super(props);
  }

  render() {
    const { icon, text } = this.props;
    return (
      <div className="Footer-button">
        <span className={`ic ${icon}`} />
        <span>{text}</span>
      </div>
    );
  }
}

export default FooterButton;
