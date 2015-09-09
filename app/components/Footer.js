import React, { Component, PropTypes } from 'react';
import FooterButton from './FooterButton';
import { FOOTER_BUTTONS } from '../constants/FakeData';

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
        {this._renderButtons()}
      </footer>
    )
  }

  _renderButtons() {
    const buttons = FOOTER_BUTTONS;
    return buttons.map( (item, index) => <FooterButton key={index} icon={item.icon} text={item.text} />);
  }
}
