import React, {Component} from 'react';
import InputLine from './Common/InputLine';
import Butt from './Common/Butt';
import BackBt from './Common/BackBt';

class CreatePage extends Component {
	constructor(props) {
		super(props);
		this.state={
			username:'',
			email:'',
			password:'',
			confirmPass:''
		}
	}

	continue = () => {
		if (this.state.password === this.state.confirmPass) {
			fetch('http://localhost:3000/register', {
				method: 'post',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({
					username: this.state.username,
					email: this.state.email,
					password: this.state.password,
				})
			})
			.then(response => response.json())
			.then(user => {
				if (user) {
					this.props.loadUser(user)
					this.props.changePage('trips')
				}
			})
		}
		// else {
		// 	console.log('no');
		// }
	}

	back = () => {
		this.props.changePage("login");
	}

	onEmailChange = (event) =>{
		this.setState({email: event.target.value})
	}

	onPasswordChange = (event) =>{
		this.setState({password: event.target.value})
	}

	onConfChange = (event) =>{
		this.setState({confirmPass: event.target.value})
	}

	onUsernameChange = (event) => {
		this.setState({username: event.target.value})
	}
 
	render() {
		return (
			<div className='tc flex flex-column'>
				<BackBt onClick={this.back} />
				<div className='measure center w-70'>
					<h1 className='tc f1 pt6 white'> Flow </h1>

					<div className='mt3'>
						<InputLine 
							value="Username" 
							type='text' 
							onChange={this.onUsernameChange}
						/>
					</div>

					<div className='mt3'>
						<InputLine 
							value="Email" 
							type='email' 
							onChange={this.onEmailChange}
						/>
					</div>

					<div className='mt3'>
						<InputLine 
							value="New Password" 
							type='password' 
							onChange={this.onPasswordChange}
						/>
					</div>

					<div className='mt3'>
						<InputLine 
							value="Re-enter Password" 
							type='password'
							onChange={this.onConfChange}
						/>
					</div>

					<div className='mt3'>
						<Butt 
							value="Create account"
							onClick={this.continue}
						/>
					</div>
				</div>
			</div>
		)
	}
}

export default CreatePage;