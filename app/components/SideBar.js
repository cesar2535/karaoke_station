import React, { Component, PropTypes } from 'react';

export default class SideBar extends Component {
	render() {
		const { className } = this.props;
		return (
			<section className={className}>
				<section className='SideBarItem'>
					<ic className='ic ic_menu_home'></ic>
					<p>首頁</p>
				</section>
				<section className='SideBarItem'>
					<ic className='ic ic_menu_favoraite'></ic>
					<p>最愛歌曲</p>
				</section>
				<section className='SideBarItem'>
					<ic className='ic ic_menu_reguestbook'></ic>
					<p>點歌本</p>
				</section>
				<section className='SideBarItem'>
					<ic className='ic ic_menu_requestinglist'></ic>
					<p>點歌清單</p>
				</section>
				<section className='SideBarItem'>
					<ic className='ic ic_menu_history'></ic>
					<p>歷史紀錄</p>
				</section>
			</section>
		);
	}
}
