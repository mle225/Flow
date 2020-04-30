import React, {Component} from 'react';
import InputLine from './Common/InputLine';
import Butt from './Common/Butt';
import BackBt from './Common/BackBt';

class ForgotPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email:''
		}
	}

	continue = () => {
		this.props.changePage("confirm")
	}

	back = () => {
		this.props.changePage("login")
	}

	onEmailChange = e => {
		this.setState({email: e.target.event})
	}

	//TODO: Solve grandparent-grandchild InputLine props issue with redux

	render() {
		return (
			<div className='tc flex flex-column'>
				<BackBt onClick={this.back} />
				<div className='measure center w-70'>
					<h1 className='tc f1 pt6 white'> Flow </h1>
					<div className='mt3'>
						<input className='hover-white input-reset pa2 inputborder bg-transparent w-100'
							type='email'
							placeholder="Email"
							onChange={this.onEmailChange}
						/>
					</div>

					<div className='mt3'>
						<Butt 
							placeholder="Retrieve Account"
							onClick={this.continue}
						/>
					</div>
				</div>
			</div>
		)
	}
}

export default ForgotPage;