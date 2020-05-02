import React, {Component} from 'react';
import BigAva from './Common/BigAva';
import Butt from './Common/Butt';
import BackBt from './Common/BackBt';

export default class ConfirmImport extends Component {

	constructor(props) {
		super(props);
		this.state={
			ava:this.props.ava,
			groupName:this.props.groupName,
			link:this.props.link
		}
	}

	continue = () => {
		this.props.changePage('shareLink');
	}

	back = () => {
		this.props.changePage('import');
	}

	copy = () => {console.log('copy trip link here')};

	render() {
		return (
			<div>
				<BackBt
					onClick={this.back}
				/>
				<div className='flex tc flex-column'>
					<div className='pa2'>
						<BigAva
							link={this.state.ava}
						/>
					</div>
					<div className='pa2'>
						<p className='white f4 tc'> 
							Your trip {this.state.groupName}  
							has been created. Click the link below to copy it.
						</p>
					</div>	
					<div clasname='pa2'>
						<a 
							className='tc'
							href=''
							onClick={this.copyLink}	> 
							{this.state.link}
						</a>
					</div>
					<div className='tc pa2'>
						<Butt
							value='Share By Email'
							className='gen' 
							onClick={this.continue}
						/>
					</div>
				</div>
			</div>
		)
	}

}