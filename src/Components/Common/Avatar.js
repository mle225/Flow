import React, {Component} from 'react';

class Avatar extends Component {
	render() {
		return (
			<div>
				<img 
				src={this.props.link} alt='lol'
				className='br-100 mw-100 h2 w2 dib pointer'
				onClick={this.props.onClick}
				/>
			</div>
		)
	}
}
export default Avatar;