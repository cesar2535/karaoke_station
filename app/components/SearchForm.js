import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import Select from 'react-select';

class SearchForm extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  }

  state = {
    select: this.props.options[0].value
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
    const { options, onSelect } = this.props;
    return (
      <form className={`SearchForm`} onSubmit={this.handleSubmit.bind(this)}>
        <input className={`SearchForm-input`} ref="input" placeholder="Type in something..." />
        <Select className={`SearchForm-select`} name="searchOption" value={this.state.select} options={options} onChange={this.handleSelect.bind(this)} searchable={false} clearable={false} />
        <button className={`SearchForm-submit`} type="submit">Submit</button>
      </form>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    const { select } = this.state;
    const input = this.getInputValue();
    this.props.onChange({input, select});
  }

  handleSelect(newVal) {
    this.setState({
      select: newVal
    });
  }
}

export default SearchForm;
