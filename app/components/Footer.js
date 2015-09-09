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
        {this._renderButtons()}
      </footer>
    )
  }

  _renderButtons() {
    const buttons = [{
      icon: 'ic_controlbar_pause',
      text: 'Pause'
    }, {
      icon: 'ic_controlbar_stop',
      text: 'Next'
    }, {
      icon: 'ic_controlbar_repeat',
      text: 'Repeat'
    }, {
      icon: 'ic_controlbar_guide',
      text: 'Guide'
    }, {
      icon: 'ic_controlbar_effect',
      text: 'Effect'
    }, {
      icon: 'ic_controlbar_key',
      text: 'Pitch'
    }, {
      icon: 'ic_controlbar_femaletune',
      text: 'Mic Effect'
    }, {
      icon: 'ic_controlbar_micvolume',
      text: 'Mic Volume'
    }, {
      icon: 'ic_controlbar_musicvolume',
      text: 'Volume'
    }];
    return buttons.map( (item, index) => <FooterButton key={index} icon={item.icon} text={item.text} />);
  }
}
