import React, {Component} from 'react';
import SearchBar from './Common/SearchBar';
import Avatar from './Common/Avatar';
import Butt from './Common/Butt';
import BackBt from './Common/BackBt';
import List from './Common/List';

export default class ImportMemberPage extends Component {

	constructor(props) {
		super(props);
		this.state={
			username: "daivi",
			tripname: this.props.tripname,
			trips: [],
			searchfield:''
		}
	}

	componentDidMount = () => {
		const link = "http://localhost:3000/trips/" + this.state.username
		fetch(link)
		.then(response => response.json())
		.then(tripList => {
			this.loadTrips(tripList)
		})
		.catch(err => console.log("no"))
	}

	back = () => {
		this.props.changePage('addtrip');
	}

	skip = () => {
		this.props.changePage('confirmImport');
	}

	searchChange = (event) => {
		this.setState({searchfield : event.target.value})
	}

	loadTrips = (data) => {
		console.log(data)
		let arr = []
		for (let mem of data) {
			const tname= mem.trip.name;
			let trip = {
				name: tname
			};
			arr.push(trip);
		}
		this.setState({trips: arr})
	}

	render() {
		const fTrips = this.state.trips.filter(trip => {
			return trip.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})  
		return (
			<div>
				<BackBt 
					onClick = {this.ye}
				/>
				<div className='tc flex flex-column' >
					<a 
						className='pa3 tc white f3'> Would you like to import members 
							from your previous trips ? 
					</a>
					<div className='pt1 pb3'>
						<SearchBar 
							searchChange={this.searchChange}
						/>
					</div>
					<div className='flow pt2'>
						<List 
							entries={fTrips}
							ava={false}
						/>
					</div>
					<Butt 
						className='gen'
						value="Skip"
						onClick={this.skip}
					/>
				</div>
			</div>
		)
	}
}