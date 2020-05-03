import React, {Component} from 'react';
import Row from './Row';
import PropTypes from 'prop-types';

export default class List extends React.Component {
	render () {
		const {entries, avaOk} = this.props;
	  	const rows = []
	  	let i = 0

   	  	entries.forEach((entry) => {
		  	let rowType = null; 
		  	if (i % 2 !== 0) {
		  		rowType = "row-one";
		  	} else {
		  		rowType = "row-two";
		  	}
		  	i = i + 1;

		  	rows.push(
		  		<Row 
		  			rowType={rowType} 
		  			entry={entry}
		  			avaOk={avaOk}
		  		/>
		  	);
	  	});

	  return (
	  	<div>
	  		{rows}
	  	</div>
	  );
	}
}