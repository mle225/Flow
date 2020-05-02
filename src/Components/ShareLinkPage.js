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
			emails:[
				'a@g.com',
				'b@g.com',
				'c@g.com'
			]
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
		let newEmails = this.state.emails;
		newEmails.push(this.state.currentEmail);
		this.setState({
			currentEmail: '',
			emails: newEmails
		})
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
							value='Enter email'
							onChange={this.onFieldChange}
						/>
					</div>
					
					<div className='pa2 tc'>
						<Butt
							value='Add'
							onClick={this.add}
						/>
					</div> 
					<div className='pa2 tc'>
						<MemList
							list={this.state.emails}
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
		const rows = [];

		list.forEach(entry => {
			rows.push(
				<MemRow 
					email={entry} 
				/>
			)
		})
		return (
			<div>
				{rows}
			</div>
		)
	}
} 

class MemRow extends Component {

	render() {
		const {email} = this.props;
		return (
			<p className='pa1 tc white f5 underline'> 
				{email}
			</p>
		)
	}
}



