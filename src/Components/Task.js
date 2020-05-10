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
import fakeTripAva from './Common/yosemite.jpg';

// import fake data
// import {trip, tasks} from "./Common/example_tasks.js"

export default class Task extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			page: '',
			searchfield: '',
			event : {
	        id: '',
	        name: '',
	        accountings: [],
	      }
		}
	}

	back = () => {
		this.props.changePage('trips');
	}

	// TODO : CHANGE ROUTING AFTER ADDING NEW PAGES

	personal = () => {
		this.changePage('tasks');
	}

	getSet = () => {
		this.changePage('tasks');
	}

	add = () => {
		this.changePage('tasks');
	}

	searchChange = event => {
		this.setState({ searchfield : event.target.value})
	}

	changePage = (nextPage) => {
		this.setState({page: nextPage})
	}

	generate = () => {
		this.changePage('');
	}

	render () {
		const type = this.props.type;
		let tasks = this.props.trip.events;
		const fTasks = tasks.filter(task => {
				return task.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
			})  

		let name_and_avatar = {
			name: this.props.trip.name,
			avatar: fakeTripAva,
		}

		return (
			<div id="task-screen flex flex-column">
				<div id="top" class="not-flow">
					<TopBar name_and_avatar={name_and_avatar} back={this.back}/>
					<SearchBar
						searchChange={this.searchChange}
					/>
					<Title/>
			 	</div>
			 	<div class="flow">
					<List 
						entries={fTasks}
						avaOk={false}
						type={type}
						changePage={this.props.changePage}
						loadData={this.props.loadEvent}
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
		name_and_avatar: PropTypes.object,
	}

	render () {
		const tripname = this.props.name_and_avatar.name;
		const avatar = this.props.name_and_avatar.avatar;

		return (
		  	<div id = "task-top-bar" class = "flex w-100">
		  		<div className='pr2 pt2'>
		  			<BackBt onClick={this.props.back} />
		  		</div>
		  		<div className='w-100 flex justify-between'>
			  		<div className= "w-15 pr3 flex items-center">
			  			<Avatar  
			  				link = {avatar}
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
