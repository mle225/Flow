// import built in library
import React from 'react';
import PropTypes from 'prop-types';
import "tachyons";

// import developers's dependencies
import "./Common/Accounting.css";
import "./Common/background.css";
import backLogo from "./Common/settings.png"
// import fake data
// import {task, accountings} from "./Common/example_accountings.js";

import BackBt from './Common/BackBt';
import SearchBar from './Common/SearchBar';
import Butt from './Common/Butt';

export default class Accounting extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			searchfield:''
		}
	}

	back = () => {
		this.props.changePage('tasks');
	}

	searchChange = (event) => {
		this.setState({searchfield : event.target.value})
	}

	render () {
		const accountings = this.props.event.accountings;
		const fAcc = accountings.filter(acc => {
				return acc.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
			})  
		return (
			<div id="accounting-screen">
				<div class="not-flow">
					<TopBar 
						back={this.back}
						task={this.props.event.name}
						/>
					<SearchBar
						searchChange={this.searchChange}
					/>
					<Title/>
					<RowName/>
			 	</div>
			 	<div class="flow">
					<List 
						accountings={fAcc}
					/>
				</div>
				<div className="tc">
					<Butt 
						className='gen'
						onClick={this.generate}
						value="Save Values"
					/>
				</div>
			</div>
		)
	}
}

class TopBar extends React.Component {
	constructor(props) {
		super(props);
	}

	static propTypes = {
		task: PropTypes.object,
	}

	render () {
		const task = this.props.task;

		return (
		  	<div id = "accounting-top-bar" className = "flex items-center w-100">
	  			{/* Back */}
		  		<BackBt 
		  			onClick={this.props.back}
		  		/>
		  		{/* Task */}
		  		<div class = "pt1 pl3 pr3 f3 tr white b">
		  			<div id = "TASK">Task:</div>
		  		</div>

		  		{/* Name */}
		  		<div class = "pt1 pl3 pr3 f3 tl white b">
		  			<div id = "accounting-task">{task}</div>
		  		</div>
		  	</div>
		)
	}
}

class Title extends React.Component {
	constructor(props) {
		super(props);
	}

	render () {
		return (
	  		<div id = "ACCOUNTING" className = "pb3 f3 white b tc">Accounting</div>
		)
	}
}

class RowName extends React.Component {
	constructor(props) {
		super(props);
	}

	render () {
		return (
		  	<div id = "accounting-title-row" className = "pb3 dt flex justify-around w-100 white b">
		  		{/* Name */}
		  		<div id = "accounting-title-name" className = "pl2 plr2 w-third dtc tc">
		  			Name
		  		</div>

		  		{/* Pay */}
		  		<div id = "accounting-title-pay" className = "pl2 plr2 w-third dtc tc">
		  			Pay
		  		</div>

		  		{/* Joined */}
		  		<div id="accounting-title-joined" className = "pl2 plr2 w-third dtc tc">
		  			Joined
		  		</div>
		  	</div>
		)
	}
}

class List extends React.Component {
	constructor(props) {
		super(props);
	}

	static propTypes = {
		accountings: PropTypes.object,
	}

	render () {
	  const accountings = this.props.accountings;

	  const rows = []
	  let i = 0

	  accountings.forEach((accounting) => {
	  	let rowType = null;
	  	if (i % 2 !== 0) {
	  		rowType = "row-one";
	  	} else {
	  		rowType = "row-two";
	  	}
	  	i = i + 1;

	  	rows.push(
	  		<Row rowType={rowType} accounting={accounting}/>
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
		this.state={
			paid : this.props.accounting.paid,
			joined : this.props.accounting.joined
		}
	}

	static propTypes = {
		rowType: PropTypes.string,
		accounting: PropTypes.object,
	}

	render () {
		const rowType = this.props.rowType;
		const name = this.props.accounting.name;
		const {paid, joined} = this.state;
		return (
			<div className="accounting-row-wrapper">
			  	<div className = {rowType}>
				  	<div className = "dt flex justify-between accounting-row">
				  		{/* Name */}
				  		<div className = "dtc tc w-third accounting-name">
				  			{name}
				  		</div>

				  		{/* Pay */}
				  		<div className = "dtc tc w-third accounting-pay">
				  			<input className = "input-pay"
								type="number"
							   	defaultValue = "0"
						       	value={paid}
						       	onChange={event => this.setState({pay: event.target.value.replace(/\D/,'')})}
						    />
				  		</div>

				  		{/* Joined */}
				  		<div className = "dtc tc w-third accoungint-joined">
							{joined === true
								? <input defaultChecked type="checkbox"/>
							    : <input type="checkbox"/>
							}
				  		</div>

				  	</div>
			  	</div>
		  	</div>

		)
	}
}
