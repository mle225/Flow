import React, {Component} from 'react';
import BackBt from './Common/BackBt'

class ConfirmPage extends Component {

  back = () => {
    this.props.changePage("login")
  }

	render() {
		return (
      <div>
      <BackBt onClick={this.back} />
  			<div className='tc flex flex-column'>
          <h1 className='f1 pt6 tc white db'> Flow </h1>
          <div className='pl5 pr5'>
            <p className='white tc'>
            Please check your email 
            at {this.props.email} for 
            the password reset link </p>
          </div>
        </div>
      </div>
		)
	}
}

export default ConfirmPage;