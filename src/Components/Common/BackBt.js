import React, {Component} from 'react';

class BackBt extends Component {
	constructor(props) {
		super(props);
	}

	render () {
		return (
			<div className='flex items-center justify-left pt1 pl2 f3'>
				<button
				onClick={this.props.onClick}
				className='white' 
				style={{border:"none", backgroundColor: "transparent"}}>
					&#x3c;
				</button>
			</div>
		)
	}
}

export default BackBt;
