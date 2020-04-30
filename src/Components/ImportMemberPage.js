import React, {Component} from 'react';
import SearchBar from './Common/SearchBar';
import Avatar from './Common/Avatar';
import Butt from './Common/Butt';
import BackBt from './Common/BackBt';

export default class ImportMemberPage extends Component {

	constructor(props) {
		super(props);
		this.state={
			username: "daivi",
			tripname: this.props.tripname,
			trips: []
		}
	}

	ye = () => {
		const link = "http://localhost:3000/trips/" + this.state.username
		fetch(link)
		.then(response => response.json())
		.then(tripList => {
			console.log(tripList)
			this.setState({trips : tripList})
			console.log(this.state.trips)
		})
		.catch(err => console.log("no"))
	}

	back = () => {
		this.props.changePage('addtrip');
	}

	continue = () => {
		this.props.changePage('');
	}

	render() {
		return (
			<div>
				<BackBt 
					onClick = {this.ye}
				/>
				<div className='tc flex flex-column' >
					
				</div>
			</div>
		)
	}
}