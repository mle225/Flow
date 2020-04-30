// import built in library
import React from 'react';
import PropTypes from 'prop-types';
import "tachyons";

// import developers's dependencies
import "./Common/Task.css";
import "./Common/background.css";
import addLogo from "./Common/add.jpg";
import settingsLogo from "./Common/settings.png";
import deleteLogo from "./Common/delete.png";
import SearchBar from './Common/SearchBar';
import List from './Common/List';
import BackBt from './Common/BackBt';
import Avatar from './Common/Avatar';
import Butt from './Common/Butt';

// import fake data
import {trip, tasks} from "./Common/example_tasks.js"

export default class Task extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			admin: this.props.admin,
			username: this.props.username,
			tripid: this.props.tripid,
			searchfield: ''
		}
	}

	back = () => {
		this.props.changePage('trips');
	}

	personal = () => {
		this.props.changePage('');
	}

	getSet = () => {
		this.props.changePage('');
	}

	add = () => {
		this.props.changePage('');
	}

	searchChange = event => {
		this.setState({ searchfield : event.target.value})
	}

	generate = () => {
		this.props.changePage('');
	}

	render () {
		const fTasks = tasks.filter(task => {
				return task.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
			})  
		return (
			<div id="task-screen flex flex-column">
				<div id="top" class="not-flow">
					<TopBar trip={trip}/>
					<SearchBar
						searchChange={this.searchChange}
					/>
					<Title/>
			 	</div>
			 	<div class="flow">
					<List 
						entries={fTasks}
						ava={false}
					/>
				</div>
				<div className="tc">
					<Butt 
						className='gen'
						onClick={this.generate}
						value="Genererate Transaction"
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
		trip: PropTypes.object,
	}

	render () {
		const tripname = this.props.trip.name;
		const avatar = this.props.trip.avatar;

		return (
		  	<div id = "task-top-bar" class = "flex w-100">
		  		<div className='pr2 pt2'>
		  			<BackBt onClick={this.back} />
		  		</div>
		  		<div className='w-100 flex justify-between'>
			  		<div className= "w-15 pr3 flex items-center">
			  			<Avatar  
			  				link = {require("" + avatar)}
			  				onClick={this.props.personal}
			  			/>
			  		</div>

			  		{/* Name */}
			  		<div class = "w-70 white pt3 b f4 tc justify-center">
			  			<div className = "name">{tripname}</div>
			  		</div>

			  		{/* Settings */}
			  		<div class = "w-15 pa3 tc flex justify-end">
		  				<img 
		  					className='pr2 pointer'
		  					src = {settingsLogo} 
		  					width = "20" 
		  					height = "20"
		  					onClick={this.getSet}
		  					/>
		  				<img 
		  					className='pl2 pointer'
		  					src = {addLogo} 
		  					width = "20" 
		  					height = "20"
		  					onClick={this.add}
		  					/>
			  		</div>
		  		</div>
		  	</div>
		)
	}
}

class Title extends React.Component {
	constructor(props) {
		super(props);
	}

	render () {
		return (
	  		<div id = "TASKS" className = "pa2 f2 b white tc">Tasks</div>
		)
	}
}
