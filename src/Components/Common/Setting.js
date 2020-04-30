import React, {Component} from 'react';

class Setting extends Component {
	render() {
		return(
			<div className='tc pt4'>
				<a className='pa2 f4 fw6 db white link hover-orange' href="#0"> {this.props.value} </a>
			</div>
		)
	}
}

export default Setting;