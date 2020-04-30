import React, {Component} from 'react';
import Avatar from './Common/Avatar';
import Butt from './Common/Butt';

class MemPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			email: "",
			password: ""
		}
	}

	continue = e => {
		e.preventDefault();
		this.props.changePage("trips");
	}

	onEmailChange = e => {
		this.setState({email: e.target.value})
	}

	onPasswordChange = e => {
		this.setState({password: e.target.value})
	}

	forget = e => {
		e.preventDefault();
		this.props.changePage("forget");
	}

	create = e => {
		e.preventDefault();
		this.props.changePage("create");
	}

	render() {
		return (
			<div className='measure center tc w-80'>
				<div className='flex flex-column'>
					<Avatar link="https://www.colorcombos.com/images/colors/FFCC00.png" />
					<p className='white f6 center w-50'> You have been invited to {this.props.group}. Please log in to continue. </p>
					<input className='hover-white center input-reset pa2 inputborder bg-transparent w-80'
						type="email"
						placeholder="Email"
						onChange={this.onEmailChange}
					/> 
					<input className='hover-white center input-reset pa2 inputborder bg-transparent w-80'
						type="password"
						placeholder="Password"
						onChange={this.onPasswordChange}
					/> 
					<div className='mt3'>
						<Butt 
							value="Sign in"
							onClick={this.continue} 
						/>
					</div>
					<div className='lh-copy mt3 w-60 center'>
						<a href='#0' 
						onClick={this.forget} 
						className='f6 link dim white db'> 
						Forgot username/ password? </a>
					</div>

					<div className='lh-copy mt3 w-60 center'>
						<a href='#0' 
						onClick={this.create} 
						className='f6 link dim white db mt3' >
						Create account </a>
					</div>
				</div>
			</div>
		)
	}
}

export default MemPage;