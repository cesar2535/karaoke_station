import React, { Component, PropTypes, findDOMNode } from 'react';

class SearchBar extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  }

  static defaultProps = {

  }

  constructor(props) {
    super(props);
  }

  getInputValue() {
    return findDOMNode(this.refs.input).value;
  }

  setInputValue(value) {
    findDOMNode(this.refs.input).value = value;
  }

  render() {
    return (
      <div className={`SearchBar`}>
        <input />
        <button></button>
      </div>
    );
  }

  handleKeyUp(e) {
    if (e.keyCode === 13) {
      this.props.onChange(this.getInputValue());
    }
  }
}

export default SearchBar;
