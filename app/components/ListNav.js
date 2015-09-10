import React, { Component, PropTypes } from 'react';

export default class ListNav extends Component {
	render() {
		const { className } = this.props;
		return (
			<section className={className}>
				<section>
					<a href="#">
						<ic className="ic ic_toolbar_sort_default_disable"></ic>
						<ic className="ic ic_topbar_triangle_normal TopBar"></ic>
					</a>
				</section>
			</section>
		);
	}
}
