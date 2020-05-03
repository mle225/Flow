import React, {Component} from 'react';
import Avatar from './Avatar';
import settingsLogo from './settings.png';
import deleteLogo from './delete.png';
import fakeTripAva from './yosemite.jpg';
import PropTypes from 'prop-types';

export default class Row extends React.Component {
	constructor(props) {
		super(props);
	}

	static propTypes = {
	 	rowType: PropTypes.string,
	 	entry: PropTypes.object,
	 	avaOk: PropTypes.bool,
	}

	render () {
		const {rowType, entry, avaOk} = this.props;
		const avatar = fakeTripAva;

		return (
			<div class = "task-row">
			  	<div className = {rowType}>
				  	<div className = "flex justify-between w-100">
				  		{
				  			(avaOk === true) 
				  			? <div className = "w-15 pa2">
					  			<Avatar 
			  						link = {avatar}
			  					/>
				  			</div>
				  			: <div></div>
				  		}

				  		{/* Name */}
				  		<div className = "w-90 pa3 tl ">
				  			<div 
				  				className='white f4 pointer' 
				  				onClick={this.onNameClick}>
				  				{entry.name}
				  			</div>
				  		</div>

				  		{/* Settings */}
				  		{
				  			(avaOk === true) 
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