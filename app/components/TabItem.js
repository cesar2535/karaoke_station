import React, { Component, PropTypes } from 'react';

export default class TabItem extends Component {
	render() {
		const { className } = this.props;
		return (
			<section className={className}>我是tabitem</section>
		);
	}
}
