import React, { Component, PropTypes } from 'react';
// import ClassNames from 'classnames';
import FooterButton from './FooterButton';
import { FOOTER_BUTTONS } from '../constants/FakeData';

export default class Footer extends Component {
  static propTypes = {

  }

  // static defaultProps = {
  //   playing: false,
  //   seeking: false
  // }

  constructor(props) {
    super(props);
  }

  render() {
    const { playState } = this.props;
    const playPauseClassName = playState === 'play' ? 'ic_controlbar_pause' : 'ic_controlbar_play';
    const playPauseTextContent = playState === 'play' ? '暫停' : '播放';
    const canToAction = playState === 'play' ? 'pause' : 'play';
    return (
      <footer className="Footer">
        <FooterButton icon={playPauseClassName} text={playPauseTextContent} onClick={ () => this._toggleButtomEvent(`${canToAction}`)}/>

        {this._renderOtherButtons()}
        {this._renderEffect()}
        {this._renderPitch()}
        {this._renderMicEcho()}
        {this._renderMicVolume()}
        {this._renderMusicVolume()}
      </footer>
    );
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
    const { player } = this.props;
    return (
      <FooterButton icon='ic_controlbar_key' text='音調' >
        <div className="Footer-button-panel">
          <div>+</div>
          <div>-</div>
        </div>
      </FooterButton>
    );
  }

  _renderMicVolume() {
    return (
      <FooterButton icon='ic_controlbar_micvolume' text='麥克風音量'>
        <div className="Footer-button-panel">
          <div>+</div>
          <div>-</div>
        </div>
      </FooterButton>
    );
  }

  _renderMusicVolume() {
    return (
      <FooterButton icon='ic_controlbar_musicvolume' text='音樂音量'>
        <div className="Footer-button-panel">
          <div>+</div>
          <div>-</div>
        </div>
      </FooterButton>
    );
  }

  _renderEffect() {
    return (
      <FooterButton icon='ic_controlbar_effect' text='音效'>
        <div className="Footer-button-panel">
          <div>+</div>
          <div>-</div>
        </div>
      </FooterButton>
    );
  }

  _renderMicEcho() {
    return (
      <FooterButton icon='ic_controlbar_echo' text='麥克風效果'>
        <div className="Footer-button-panel">
          <div>+</div>
          <div>-</div>
        </div>
      </FooterButton>
    );
  }

  _renderOtherButtons() {
    const buttons = FOOTER_BUTTONS;
    const { player } = this.props;
    const onClickEventHandler = [ player.stop, player.repeat, player.guide ];
    return buttons.map( (item, index) => <FooterButton key={index} icon={item.icon} text={item.text} onClick={ () => onClickEventHandler[index]() } />);
  }

  _toggleButtomEvent(action) {
    const { player, playState } = this.props;
    const planstatus = ( playState === 'play' ? 'pause' : 'play' ) === 'pause' ? 'resume' : 'play';
    player.togglePlayPauseButtom(planstatus);
    const realAction = planstatus === 'resume' ? 'resume' : action;
    player.play(realAction);
  }
}
