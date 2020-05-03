import React, {Component} from 'react';
import BackBt from './Common/BackBt';
import InputLine from './Common/InputLine';
import Butt from './Common/Butt';
import './Common/ShareLinkPage.css';

export default class ShareLinkPage extends Component {
	constructor(props) {
		super(props);
		this.state={
			currentEmail: '',
			delEmail: '',
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
		if (this.state.currentEmail.length) {
			let newEmails = this.state.emails;
			newEmails.push(this.state.currentEmail);
			this.setState({
				currentEmail: '',
				emails: newEmails
			}
		)}
	}

	del = (email) => {
		this.setState({
			emails: this.state.emails.filter(elem => 
				elem != email),
			delEmail: ''
		});
	}

	render() {
		var rows = this.state.emails.map(entry => {
			return (
				<MemRow
					email={entry}
					del={this.del}
				/>
			)
		})
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
					<div className='pa2 tc flow vh-50'>
						{rows}
					</div>
					<div className='pa1 tc'>
						<Butt 
							onClick={this.share}
							value='Share'
						/>
					</div>
				</div>
			</div>
		)
	}
}

class MemRow extends Component {

	delete = () => {
		this.props.del(this.props.email);
	}

	render() {
		const {email} = this.props;
		return (
			<div className='flex justify-center'>
				<div className='pa1'>
					<p className='tc white f5 underline'> 
						{email}
					</p>
				</div>
				<div className='pl3 pr3 pt3'>
					<button 
						onClick={this.delete}
						className='white'
						style={{border:"none", backgroundColor: "transparent"}}>
						X
					</button>
				</div>
			</div>
		)
	}
}



