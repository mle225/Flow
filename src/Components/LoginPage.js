import React, {Component} from 'react';
import Butt from './Common/Butt';
import InputLine from './Common/InputLine';

import ForgotPage from './ForgotPage';
import CreatePage from './CreatePage';
import Trip from './Trip';

class LoginPage extends Component {
	constructor(props) {
		super(props);
		this.state={
			page:'',
			signInEmail:'',
			signInPass:'',
			user: {
		        id : '',
		        avatar: '',
		        email: '',
		        name: '',
		        trips: [],
		    }
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
				if (user.trips[0]) {
					console.log(1);
					this.loadUser(user);
					this.changePage("trips");
				}
				else {
					user.trips=[];
					console.log(2);
					this.loadUser(user);
					this.changePage("trips");
				}
			}
		})
		.catch(err => console.log(err));
	}

	changePage = (nextPage) => {
	    this.setState({
	    	page: nextPage
	    });
	 };

	loadUser = (data) => {
	    console.log(data);
	    this.setState({ user: {
	    	id: data.id,
	    	avatar: data.avatar,
	    	email: data.email,
	    	name: data.name,
	    	trips: data.trips,
	    }})
	 }

	forget = e => {
		e.preventDefault();
		this.changePage("forget");
	}

	create = e => {
		e.preventDefault();
		this.changePage("create");
	}

	onEmailChange = (event) => {
    	this.setState({signInEmail: event.target.value})
  	}

	onPasswordChange = (event) => {
		this.setState({signInPass: event.target.value})
	}

	render() {
		let {page} = this.state;

		switch (page) 
		{

			case "trips":
		        return (
		        	<Trip
			            user={this.state.user} 
			            changePage={this.changePage}
			            loadTrip={this.loadTrip}
			            type="trip" 
		        	/>
		        )

			case "forget":
		        return (
		        	<ForgotPage 
		            	changePage={this.changePage} 
		        	/>
		        )

		    case "create":
		        return (
		        	<CreatePage 
		            	changePage={this.changePage}
		            	loadUser={this.loadUser}
		        	/>
		        )

			default: 
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
}

export default LoginPage;
