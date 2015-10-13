import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom'
import chunk from 'lodash/array/chunk';

class Slider extends Component {
  static propTypes = {
    children: PropTypes.array.isRequired
  }

  state = {
    current: 0
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;
    const { current } = this.state;
    const slides = chunk(children, 2);

    return (
      <div className={`Slider`}>
        {this.renderPreviousBtn(current)}
        {this.renderNextBtn(current, slides.length)}
        <div className={`Slider-list`}>
          {slides[current]}
        </div>
        {this.renderDots(slides)}
      </div>
    )
  }

  renderPreviousBtn(current) {
    return current === 0 ? null : <div className={`Slider-previousBtn ic btn_page_previous`} onClick={this.handlePrevious.bind(this, current)}></div> ;
  }

  handlePrevious(current) {
    let previous = current - 1;
    if (previous < 0) {
      previous = 0;
    }
    this.setState(Object.assign(this.state, { current: previous }));
  }

  renderNextBtn(current, length) {
    return current === length - 1 ? null : <div className={`Slider-nextBtn ic btn_page_next`} onClick={this.handleNext.bind(this, current, length)}></div> ;
  }

  handleNext(current, length) {
    let next = current + 1;
    const final = length - 1;
    if (next > final) {
      next = final;
    }
    this.setState(Object.assign(this.state, { current: next }));
  }

  renderDots(slides) {
    return (
      <div className={`Slider-dots`}>
        {slides.map(this.renderDot.bind(this))}
      </div>
    );
  }

  renderDot(item, index) {
    const { current } = this.state;
    const className = index === current ? `Slider-dot is-current` : `Slider-dot`;
    return <div key={index} className={className} onClick={ evt => this.setState({ current: index })}></div>
  }
}

export default Slider;
