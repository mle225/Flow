import React, {Component} from 'react';

class SearchBar extends Component {

	render() {
		return (
			<div id = "trip-search-bar" class = "pa2 tc">
				<input
	  				className = 'search-bar #55555530px white tc pa3 ba w-90'
	  				type = "text" 
	  				placeholder = "Search"
	  				onChange = {this.props.searchChange}
	  			/>
			</div>
		)
	}
}

export default SearchBar;