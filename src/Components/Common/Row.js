import React, {Component} from 'react';
import Avatar from './Avatar';
import settingsLogo from './settings.png';
import deleteLogo from './delete.png';

export default class Row extends React.Component {
	constructor(props) {
		super(props);
	}

	// static propTypes = {
	// 	rowType: PropTypes.string,
	// 	entry: PropTypes.object,
	// }

	render () {
		const rowType = this.props.rowType;
		const entry = this.props.entry.name;
		const avatar = this.props.entry.avatar;
		return (
			<div class = "task-row">
			  	<div className = {rowType}>
				  	<div className = "flex justify-between w-100">
				  		{
				  			(this.props.ava === true) 
				  			? <div className = "w-15 pa2">
					  			<Avatar 
			  						link = {require("" + avatar)}
			  					/>
				  			</div>
				  			: <div> </div>
				  		}

				  		{/* Name */}
				  		<div className = "w-90 pa3 tl ">
				  			<div 
				  				className='white f4 pointer' 
				  				onClick={this.onNameClick}>
				  				{entry}
				  			</div>
				  		</div>

				  		{/* Settings */}
				  		{
				  			(this.props.ava === true) 
					  		? <div className = "w-15 pa3 tc">
						  			<img
						  				className='pointer' 
						  				src = {settingsLogo} 
						  				width = "20" 
						  				height = "20"
						  				onClick={this.onIconClick}
						  				/>
						  	</div>
						  	: <div className = "w-15 pa3 tc">
					  				<img 
						  				className='pointer'
						  				src = {deleteLogo} 
						  				width = "20" 
						  				height = "20"
						  				onClick={this.onIconClick}
					  				/>
					  		</div>
				  		}
				  	</div>
			  	</div>
			 </div>
		)
	}
}