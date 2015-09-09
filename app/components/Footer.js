import React, { Component, PropTypes } from 'react';
import FooterButton from './FooterButton';

export default class Footer extends Component {
  static propTypes = {

  }

  static defaultProps = {

  }

  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;
    return (
      <footer className="Footer">
        {children}
      </footer>
    )
  }

  _renderButtons(buttons) {
    return buttons.map(item => <FooterButton icon={item.icon} text={item.text} />);
  }
}
