import React, {Component} from 'react';

class BigAva extends Component {
	render() {
		return (
			<div>
				<img 
				src={this.props.link} alt='lol'
				className='br-100 mw-100 h5 w5 dib pointer'
				onClick={this.props.onClick}
				/>
			</div>
		)
	}
}
export default BigAva;