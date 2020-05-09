import React, {Component} from 'react';
import BackBt from './Common/BackBt';
import InputLine from './Common/InputLine';
import Butt from './Common/Butt';

export default class ShareLinkPage extends Component {
	constructor(props) {
		super(props);
		this.state={
			delEmail: '',
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
		let newEmails = this.state.emails;
		let found = newEmails.includes(this.state.currentEmail);
		if (!found) {
			newEmails.push(this.state.currentEmail);
			this.setState({
				currentEmail: '',
				emails: newEmails
			})
		}
	}

	del = (email) => {
		const fEmails = this.state.emails.filter(listemail => {
			return listemail !== email;
		})
		this.setState({
			delEmail : email,
			emails: fEmails
		})
	}

	render() {
		const fEmails = this.state.emails.filter(email => {
			return email !== this.state.delEmail;
		})

		const rows = [];

		fEmails.forEach(email => {
			rows.push(
				<div className='tc flex justify-center'>
				<p className='pa1 tc white f5 underline'> 
					{email}
				</p>
				<a 
					className='white f4 pt3 pl2'
					onClick={() => this.del(email)}>
				X	
				</a>
			</div>
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
					<div className='pa2 tc flow'>
						{rows}
					</div>
					<div className='tc '>
						<Butt
							value='Share'
							onClick={this.share}
						/>
					</div>
				</div>
			</div>
		)
	}
}
