import React, {Component} from 'react';

class Butt extends Component {

	render () {
		return (
		<div>
			<input 
				className='white ph3 pv2 input-reset bn bton mt4 b--white grow pointer' 
				type='submit' 
				value={this.props.value}
				onClick={this.props.onClick}
			/>
		</div>
		)
	}
}

export default Butt;