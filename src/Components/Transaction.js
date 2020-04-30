// import built in library
import React from 'react';
import PropTypes from 'prop-types';
import "tachyons";
import SearchBar from './Common/SearchBar';

// import developers's dependencies
import "./Common/Transaction.css";
import "./Common/background.css";
import backLogo from "./Common/settings.png";


// import fake data
import {transactions} from "./Common/example_transactions.js";

export default class Transaction extends React.Component {
	constructor(props) {
		super(props);
	}

	render () {
		return (
			<div id = "transaction-screen">
				<div class="not-flow">
					<TopBar/>
					<SearchBar/>
				</div>
				<div class="flow">
					<List transactions={transactions}/>
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
		  	<div id = "transaction-top-bar">

		  		{/* Back */}
		  		<img 
		  			src = {backLogo}
		  			id="back-button"
		  		/>

		  		{/* Transaction */}
		  		<div id = "title" class="w-100 tc">
		  			Transaction
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
		transactions: PropTypes.object,
	}

	render () {
		const transactions = this.props.transactions;

		const rows = []
		let i = 0

		transactions.forEach((transaction) => {
			let rowType = null;
			if (i % 2 !== 0) {
				rowType = "row-one";
			} else {
				rowType = "row-two";
			}
			i = i + 1;

			rows.push(
				<Row rowType={rowType} transaction={transaction}/>
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
		transactions: PropTypes.object,
	}

	render () {
		const rowType = this.props.rowType;
		const sender = this.props.transaction.sender;
		const receiver = this.props.transaction.receiver;
		const amount = this.props.transaction.amount;

		return (
			<div class = "transaction-row">
				<div class = {rowType}>
					<div class="pb2 description">{sender} sends {receiver}</div>
					<div class="amount"> ${amount}</div>
				</div>
			</div>
		)
	}
}