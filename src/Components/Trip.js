// import built in library
import React from 'react';
import PropTypes from 'prop-types';
import "tachyons";

// import developers's dependencies
import "./Common/Trip.css";
import "./Common/background.css";
import addLogo from "./Common/add.jpg";
import settingsLogo from "./Common/settings.png";
import SearchBar from './Common/SearchBar';
import Avatar from './Common/Avatar';
import List from './Common/List';

// import fake data
import {user, trips} from "./Common/example_trips.js"

export default class Trip extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			username: this.props.username,
			tripid: this.props.tripid,
			searchfield:''
		}
	}

	personal = () => {
		this.props.changePage('')
	}

	getSet = () => {
		this.props.changePage('trip');
	}

	add = () => {
		this.props.changePage('');
	}

	searchChange = event => {
		this.setState({ searchfield : event.target.value})
	}

	render () {
		const ftrips = trips.filter(trip => {
				return trip.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
			})
		return (
			<div id="trip-screen">
				<div class="not-flow">
					<TopBar
						add={this.add}
						getSet={this.getSet} 
						user={user}
						personal={this.personal}
					/>
					<SearchBar
						searchChange={this.searchChange}
					/>
					<div className='pa2'>
						<Title/>
					</div>
			 	</div>
			 	<div class="flow">
					<List 
						entries={ftrips}
						ava={true}
					/>
				</div>
			</div>
		)
	}
}

class TopBar extends React.Component {
	constructor(props) {
		super(props);
	}

	static propTypes = {
		user: PropTypes.object,
	}

	render () {
		const username = this.props.user.name;
		const avatar = this.props.user.avatar;

		return (
		  	<div id = "trip-top-bar" class = "flex justify-between w-100">
		  		{/* Avatar */}
		  		<div className= "w-15 pl2 pr2 pb2 pt3 tc">
		  			<Avatar  
		  				link = {require("" + avatar)}
		  				onClick={this.props.personal}
		  			/>
		  		</div>

		  		{/* Name */}
		  		<div class = "w-60 pa3 tl">
		  			<div className='white b f4 lh-copy'>{username}</div>
		  		</div>

		  		{/* Settings */}
		  		<div class = "w-25 pa3 tc flex justify-end">
		  			<div className='pr2 measure'>
		  				<img 
		  					src = {settingsLogo} 
		  					width = "20" 
		  					height = "20"
		  					className='pointer'
		  					onClick={this.props.getSet}
		  				/>
		  			</div>
		  			<div className='pl2 measure'>
		  				<img 
		  					src = {addLogo} 
		  					width = "20" 
		  					height = "20"
		  					className='pointer'
		  					onClick={this.props.add}
		  				/>
		  			</div>
		  		</div>

		  	</div>
		)
	}
}

class Title extends React.Component {
	render () {
		return (
	  		<div id = "TRIPS" className="tc f3 b white">Trips</div>
		)
	}
}
