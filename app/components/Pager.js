import React, { Component, PropTypes } from 'react';

export default class Pager extends Component {
  render() {
    const { className, total } = this.props;
    return (
      <section className={className}>Total: {total}
      </section>
    );
  }
}
