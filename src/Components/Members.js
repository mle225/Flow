// import built in library
import React from 'react';
import PropTypes from 'prop-types';
import "tachyons";

// import developers's dependencies
import "./Common/Members.css";
import "./Common/background.css";
import backLogo from "./Common/settings.png";
import addLogo from "./Common/add.jpg";
import SearchBar from './Common/SearchBar';

// import fake data
import {members} from "./Common/example_members.js";

export default class Members extends React.Component {
	constructor(props) {
		super(props);
	}

	render () {
		return (
			<div id = "members-screen">
				<div class="not-flow">
					<TopBar/>
					<SearchBar/>
				</div>
				<div class="flow">
					<List members={members}/>
				</div>
			</div>
		)
	}
}


class TopBar extends React.Component {
	constructor(props) {
		super(props);
	}

	render () {
		return (
		  	<div id = "members-top-bar">

		  		{/* Back */}
		  		<img 
		  			src = {backLogo}
		  			id="back-button"
		  		/>

		  		{/* Transaction */}
		  		<div id = "title" class="w-100 tc">
		  			Members
		  		</div>

		  		{/* Add */}
		  		<img
		  			src = {addLogo}
		  			id = "add-button"
		  		/>

		  	</div>
		)
	}
}

class List extends React.Component {
	static propTypes = {
		members: PropTypes.object,
	}

	render () {
		const members = this.props.members;

		const rows = []
		let i = 0

		members.forEach((member) => {
			let rowType = null;
			if (i % 2 !== 0) {
				rowType = "row-one";
			} else {
				rowType = "row-two";
			}
			i = i + 1;

			rows.push(
				<Row rowType={rowType} member={member}/>
			);
		});

		return (
			<div>
				{rows}
			</div>
	  	);
	}
}

class Row extends React.Component {
	constructor(props) {
		super(props);
	}

	static propTypes = {
		rowType: PropTypes.string,
		member: PropTypes.object,
	}

	render () {
		const rowType = this.props.rowType;
		const avatar = this.props.member.avatar;
		const name = this.props.member.name;

		return (
			<div class = "members-row">
				<div class = {rowType}>
				  	<div className = "flex justify-between w-100">

				  		{/* Avatar */}
				  		<div className = "w-30 pa3 tc">
				  			<img 
			  					src = {require("" + avatar)}
			  					class="trip-avatar br-100 h2 w2 dib"
			  				/>
				  		</div>

				  		{/* Name */}
				  		<div className = "w-60 pa3 tl">
				  			<span class = "name">{name}</span>
				  		</div>
				  	</div>
				</div>
			</div>
		)
	}
}