// import built in library
import React from 'react';
import PropTypes from 'prop-types';
import "tachyons";

// import developers's dependencies
import "./Common/Trip.css";
import "./Common/background.css";
import addLogo from "./Common/add.jpg";
import settingsLogo from "./Common/settings.png";
import SearchBar from './Common/SearchBar';
import Avatar from './Common/Avatar';
import List from './Common/List';

import AddTripPage from './AddTripPage';
import ImportMemberPage from './ImportMemberPage';
import ConfirmImport from './ConfirmImport';
import ShareLinkPage from './ShareLinkPage';
import SettingTemplatePage from './SettingTemplatePage';


// import fake data
import fakeMemAva from "./Common/mtp.jpg";

export default class Trip extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			user: this.props.user,
			trip: {
		        id: '',
		        avatar: '',
		        name: '',
		        events: [],
		    },
			page: '',
			searchfield:''
		}
	}

	static propTypes = {
		user: PropTypes.object,
		changePage: PropTypes.func,
		type: PropTypes.string,
	}

	loadTrip = (data) => {
	    console.log(data);
	    this.setState({ trip : {
	      	id: data.id,
	      	avatar: data.avatar,
	      	name: data.name,
	      	events: data.events,
	    }})
	}

	personal = () => {
		this.props.changePage('personal')
	}

	getSet = () => {
		this.changePage('settings');
	}

	add = () => {
		this.changePage('addtrip');
	}

	searchChange = event => {
		this.setState({ searchfield : event.target.value})
	}

	changePage = (nextPage) => {
		this.setState({page: nextPage})
	}

	render () {
		const type = this.props.type;
		let trips = this.props.user.trips;
		const ftrips =trips.filter(trip => {
				return trip.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		});

		let name_and_avatar = {
			name: this.props.user.name,
			avatar: fakeMemAva,
		}


		let {page} = this.state;
		switch(page) {

			case "sharelink":
		    	return (
		        	<ShareLinkPage 
		          		changePage={this.changePage}
		        	/>
		      	)

		    case "confirmImport":
		      	return (
		          	<ConfirmImport
		            	changePage={this.changePage}
		            	groupName='Utah Trip'
		            	ava="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/%27David%27_by_Michelangelo_Fir_JBU013.jpg/165px-%27David%27_by_Michelangelo_Fir_JBU013.jpg"
		            	link="http://pronhup.com"
		          	/>
		      	)

		    case "addtrip":
		      	return (
		        	<AddTripPage
		          		changePage={this.changePage}
		          		admin={this.state.user.username}
		        	/>
		      	)

			case "personal":
				return (
					<div className='tc flex flex-column'>
			            <SettingTemplatePage 
			            	avatar="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/14264830_372615786419976_2056481598518504979_n.jpg?_nc_cat=101&_nc_sid=85a577&_nc_ohc=gyeXJCdSTpgAX_XqKVh&_nc_ht=scontent-lax3-1.xx&oh=644a3bfccdd670740976f8ab8617f03a&oe=5EA4E241"
			            	settings={['profile', 'username', 'privacy']}
			            	changePage={this.changePage} />
			         </div>
				)

			case "import":
		    	return (
		    	    <ImportMemberPage 
		    	    	tripname='a'
		    	    	changePage={this.changePage}
		    	    />
		    	)
			

			default:
				return (
					<div id="trip-screen">
						<div className="not-flow">
							<TopBar
								add={this.add}
								getSet={this.getSet} 
								name_and_avatar={name_and_avatar}
								personal={this.personal}
							/>
							<SearchBar
								searchChange={this.searchChange}
							/>
							<div className='pa2'>
								<Title/>
							</div>
					 	</div>
					 	<div className="flow">
							<List 
								entries={ftrips}
								avaOk={true}
								type={type}
								changePage={this.props.changePage}
								loadData={this.loadTrip}
							/>
						</div>
					</div>
				)
		}
	}
}

class TopBar extends React.Component {
	constructor(props) {
		super(props);
	}

	static propTypes = {
		name_and_avater: PropTypes.object,
	}

	render () {
		const name = this.props.name_and_avatar.name;
		const avatar = this.props.name_and_avatar.avatar;

		return (
		  	<div id = "trip-top-bar" className = "flex justify-between w-100">
		  		{/* Avatar*/}
		  		 
		  		<div className= "w-15 pl2 pr2 pb2 pt3 tc">
		  			<Avatar  
		  				link = {avatar}
		  				onClick={this.props.personal}
		  			/>
		  		</div>

		  		{/* Name */}
		  		<div className = "w-60 pa3 tl">
		  			<div className='white b f4 lh-copy'>{name}</div>
		  		</div>

		  		{/* Settings */}
		  		<div className = "w-25 pa3 tc flex justify-end">
		  			<div className='pr2 measure'>
		  				<img 
		  					src = {settingsLogo} 
		  					width = "20" 
		  					height = "20"
		  					className='pointer'
		  					onClick={this.props.getSet}
		  				/>
		  			</div>
		  			<div className='pl2 measure'>
		  				<img 
		  					src = {addLogo} 
		  					width = "20" 
		  					height = "20"
		  					className='pointer'
		  					onClick={this.props.add}
		  				/>
		  			</div>
		  		</div>

		  	</div>
		)
	}
}

class Title extends React.Component {
	render () {
		return (
	  		<div id = "TRIPS" className="tc f3 b white">Trips</div>
		)
	}
}
