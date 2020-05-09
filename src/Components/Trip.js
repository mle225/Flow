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
import fakeMemAva from "./Common/mtp.jpg";

//import {user, trips} from "./Common/example_trips.js"

export default class Trip extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			searchfield:''
		}
	}

	static propTypes = {
		user: PropTypes.object,
		changePage: PropTypes.func,
		type: PropTypes.string,
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
		const type = this.props.type;
		let trips = this.props.user.trips;
		const ftrips =trips.filter(trip => {
				return trip.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		});

		let name_and_avatar = {
			name: this.props.user.name,
			avatar: fakeMemAva,
		}

		return (
			<div id="trip-screen">
				<div className="not-flow">
					<TopBar
						add={this.add}
						getSet={this.getSet} 
						name_and_avatar={name_and_avatar}
						personal={this.personal}
					/>
					<SearchBar
						searchChange={this.searchChange}
					/>
					<div className='pa2'>
						<Title/>
					</div>
			 	</div>
			 	<div className="flow">
					<List 
						entries={ftrips}
						avaOk={true}
						type={type}
						changePage={this.props.changePage}
						loadData={this.props.loadTrip}
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
		name_and_avater: PropTypes.object,
	}

	render () {
		const name = this.props.name_and_avatar.name;
		const avatar = this.props.name_and_avatar.avatar;

		return (
		  	<div id = "trip-top-bar" className = "flex justify-between w-100">
		  		{/* Avatar*/}
		  		 
		  		<div className= "w-15 pl2 pr2 pb2 pt3 tc">
		  			<Avatar  
		  				link = {avatar}
		  				onClick={this.props.personal}
		  			/>
		  		</div>

		  		{/* Name */}
		  		<div className = "w-60 pa3 tl">
		  			<div className='white b f4 lh-copy'>{name}</div>
		  		</div>

		  		{/* Settings */}
		  		<div className = "w-25 pa3 tc flex justify-end">
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
