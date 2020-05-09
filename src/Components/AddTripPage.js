import React, {Component} from 'react';
import BackBt from './Common/BackBt';
import BigAva from './Common/BigAva';
import InputLine from './Common/InputLine';
import Butt from './Common/Butt';

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


class AddTripPage extends Component {

	constructor(props) {
		super(props);
		this.state= {
			admin: this.props.username,
			tripname: '',
			tripstart: new Date(),
			tripend: new Date()
		}
	}

	continue = () => {
		this.props.changePage('import');
	}

	back = () => {
		this.props.changePage('trips');
	}

	onTripChange = (event) => {
		this.setState({tripname: event.target.value})
	}

	onStartChange = (event) => {
		this.setState({tripstart: event.target.value})
	}

	onEndChange = (event) => {
		this.setState({tripend: event.target.value})
	}

	render() {

		return (
			<div className='flex flex-column'>
				<BackBt onClick={this.back} />
				<div className='measure center' >
					<div className='pa2'>
						<BigAva 
							link="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/%27David%27_by_Michelangelo_Fir_JBU013.jpg/165px-%27David%27_by_Michelangelo_Fir_JBU013.jpg"
						/>
					</div>
					<div className='pt2 pb3 w-100 tc'>
						<InputLine 
							value="Enter Trip Name" 
							type='text' 
							onChange={this.onTripChange}
						/>
					</div>

					<div className='pt1 pb1 flex flex-column tc'>
						<p className='white '> Enter Trip Start Date </p> 

						<DatePicker 
							selected={this.state.tripstart}
							onChange={this.onStartChange}
						/>
					</div>

					<div className='pt1 pb1 flex flex-column tc'>
						<p className='white '> Enter Trip End Date </p> 

						<DatePicker 
							selected={this.state.tripstart}
							onChange={this.onEndChange}
						/>
					</div>

					<div className='pt1 tc'>
						<Butt 
							value="Create Trip"
							onClick={this.continue}
						/>
					</div>
				</div>
			</div>
		)
	}
}

export default AddTripPage;