import React, { Component, PropTypes } from 'react';
import List from './List';
import ListNav from './ListNav';

export default class SongBookList extends Component {
	render() {
    	const { className, songs, artists, type } = this.props;
    	const renderItem = type === 'language' ? this.renderPlaylistItem.bind(this) : this.renderArtistlistItem.bind(this)
	    const items = type === 'language' ? songs : artists
	    console.log(artists)
	    return (
	    	<div>
		    	<ListNav className={className} />
		    	<List className={`Playlist ${className}`}
		            renderItem={renderItem}
		            items={items} />
		    </div>
	    );
  	}

  	renderPlaylistItem(song) {
		const { className } = this.props;
		let itemClass = '';
		if (className.search('home') > -1) {
			itemClass = 'Playlist-item--home';
		}
		return (
			<div key={song.title} className={`Playlist-item ${itemClass}`}>
		    	<span className="Playlist-item-title">{song.title}</span>
		    	<span className="Playlist-item-artist">{song.artist}</span>
			</div>
    	);
    }

    renderArtistlistItem(artist) {
		const { className } = this.props;
		let itemClass = '';
		if (className.search('home') > -1) {
			itemClass = 'Playlist-item--home';
		}
		return (
			<div key={artist.name} className={`Playlist-item ${itemClass}`}>
		    	<span className="Playlist-item-artist">{artist.name}</span>
			</div>
    	);
    }
}

