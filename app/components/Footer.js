import React, { Component, PropTypes } from 'react';
import ClassNames from 'classnames';
import FooterButton from './FooterButton';
import { FOOTER_BUTTONS } from '../constants/FakeData';

export default class Footer extends Component {
  static propTypes = {

  }

  static defaultProps = {
    playing: false,
    seeking: false
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;
    return (
      <footer className="Footer">
        {this._renderPlayButton()}
        {this._renderOtherButtons()}
      </footer>
    )
  }
  _renderPlayButton() {
    const { playing, seeking } = this.props;

    let icon, text;
    if (seeking) {

    } else if (playing) {
      icon = 'ic_controlbar_pause';
      text = 'Pause';
    } else {
      icon = 'ic_controlbar_play';
      text = 'Play';
    }

    return <FooterButton icon={icon} text={text} />;
  }

  _renderOtherButtons() {
    const buttons = FOOTER_BUTTONS;
    return buttons.map( (item, index) => <FooterButton key={index} icon={item.icon} text={item.text} />);
  }
}
