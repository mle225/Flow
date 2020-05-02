import React, {Component} from 'react';
import BackBt from './Common/BackBt';
import InputLine from './Common/InputLine';
import Butt from './Common/Butt';

export default class ShareLinkPage extends Component {
	constructor(props) {
		super(props);
		this.state={
			currentEmail: '',
			tripName:this.props.tripName,
			emails:[]
		}
	}

	back = () => {
		this.props.changePage('confirmImport');
	}

	share = () => {
		console.log('shared');
		
		//TODO: set root state trip name here to make query call

		this.props.changePage('trips');
	}

	onFieldChange = (event) => {
		this.setState({currentEmail: event.target.value});
	}

	onSubmit = () => {
		//Create new thingie here
		this.setState({currentEmail: ''})
	}

	add = () => {
		console.log('yea');
	}

	render() {
		return (
			<div>
				<BackBt 
					onClick={this.back}
				/>
				<div className='flex flex-column'>
					<div className='pa2 center tc w-50'>
						<InputLine
							type='email'
							value='Enter member email'
							onChange={this.onFieldChange}
						/>
					</div>
					
					<div className='pa2 tc'>
						<Butt
							value='Add'
							onClick={this.add}
						/>
					</div> 
				</div>
			</div>
		)
	}
}

class MemList extends Component {

	render() {
		const list = this.props.list;
		return (
			<div>

			</div>
		)
	}
} 

