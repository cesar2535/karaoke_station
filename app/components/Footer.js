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
        <FooterButton icon='ic_controlbar_play' text='播放' />
        <FooterButton icon='ic_controlbar_pause' text='暫停' />
        {this._renderOtherButtons()}
        {this._renderPitch()}
        {this._renderMicVolume()}
        {this._renderMusicVolume()}
      </footer>
    )
  }

  // _renderPlayButton() {
  //   const { playing, seeking } = this.props;
  //
  //   let icon, text;
  //   if (seeking) {
  //
  //   } else if (playing) {
  //     icon = 'ic_controlbar_pause';
  //     text = 'Pause';
  //   } else {
  //     icon = 'ic_controlbar_play';
  //     text = 'Play';
  //   }
  //
  //   return <FooterButton icon={icon} text={text} />;
  // }

  _renderPitch() {
    return (
      <FooterButton icon='ic_controlbar_key' text='音調'>
        <div className="Footer-button-panel">
          <div>+</div>
          <div>-</div>
        </div>
      </FooterButton>
    )
  }

  _renderMicVolume() {
    return (
      <FooterButton icon='ic_controlbar_micvolume' text='麥克風音量'>
        <div className="Footer-button-panel">
          <div>+</div>
          <div>-</div>
        </div>
      </FooterButton>
    )
  }

  _renderMusicVolume() {
    return (
      <FooterButton icon='ic_controlbar_musicvolume' text='音樂音量'>
        <div className="Footer-button-panel">
          <div>+</div>
          <div>-</div>
        </div>
      </FooterButton>
    )
  }

  _renderOtherButtons() {
    const buttons = FOOTER_BUTTONS;
    return buttons.map( (item, index) => <FooterButton key={index} icon={item.icon} text={item.text} />);
  }
}
