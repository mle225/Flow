import React, {Component} from 'react';
import Avatar from './Common/Avatar';
import Setting from './Common/Setting';
import Butt from './Common/Butt';
import BackBt from './Common/BackBt';

class SettingTemplatePage extends Component {

	prev = e => {
		e.preventDefault();
		this.props.changePage("trips");
	}

	out = e => {
		e.preventDefault();
		this.props.changePage("login");
	}

	render() {
		const{settings} = this.props;
		return(
			<div className='flex flex-column'>
				<BackBt onClick={this.prev}/>
				<div className='center tc pa4'>
					<div className='center pa4'>
						<Avatar link= {this.props.avatar}/>
						<div className='pt4'> {
						settings.map((user, i) => {
						 	return (
						 		<Setting value={settings[i]} />
						 	)
						 })
						} </div>
						<Butt 
							value={this.props.value} 
							onClick={this.out}
						/>
					</div>
				</div>
			</div>
		)
	}
}

export default SettingTemplatePage;

