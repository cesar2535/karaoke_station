import React, { Component, PropTypes } from 'react';

export default class SideBar extends Component {
	render() {
		const { className } = this.props;
		return (
			<section className={className}>我是sidebar</section>
		);
	}
}
