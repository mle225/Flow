import React, {Component} from 'react';

import './InputLine.css'

class InputLine extends Component {
	render() {
		return (
			<div>
			<input className='hover-white input-reset pa2 inputborder bg-transparent w-100'
				type={this.props.type}
				placeholder={this.props.value}
				onChange={this.props.onChange}
			/>
			</div>
		)
	};
} 

export default InputLine;