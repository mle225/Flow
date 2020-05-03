import React, {Component} from 'react';
import Butt from './Common/Butt';
import InputLine from './Common/InputLine';

class LoginPage extends Component {
	constructor(props) {
		super(props);
		this.state={
			signInEmail:'',
			signInPass:''
		}
	}

	continue = () => {
		fetch('http://localhost:3000/signin', {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.signInEmail,
				password: this.state.signInPass
			})
		})
		.then(response => response.json())
		.then(user => {
			if (user.id) {
				this.props.loadUser(user);
				this.props.changePage("trips");
			}
		})
		.catch(err => console.log(err));
	}

	forget = e => {
		e.preventDefault();
		this.props.changePage("forget");
	}

	create = e => {
		e.preventDefault();
		this.props.changePage("create");
	}

	onEmailChange = (event) => {
    	this.setState({signInEmail: event.target.value})
  	}

	onPasswordChange = (event) => {
		this.setState({signInPass: event.target.value})
	}

	render() {
		return (
			<div className='measure center w-70 '>
				<h1 className='tc f1 pt6 white'> Flow </h1>
				<div className='mt3'>
					<InputLine 
						value="Email" 
						type='email' 
						onChange={this.onEmailChange}
					/>
				</div>

				<div className='mt3'>
					<InputLine 
						value="Password" 
						type='password' 
						onChange={this.onPasswordChange}
					/>
				</div>

				<div className='mt3'>
					<Butt 
						value="Sign In"
						onClick={this.continue} 
					/>
				</div>

				<div className='lh-copy mt3 w-60 center'>
					<a href='#0' 
					onClick={this.forget} 
					className='f6 link dim white db'> 
					Forgot your password? </a>
				</div>

				<div className='lh-copy mt3 w-60 center'>
					<a href='#0' 
					onClick={this.create} 
					className='f6 link dim white db mt3' >
					Create account </a>
				</div>
			</div>
		)
	}
}

export default LoginPage;
