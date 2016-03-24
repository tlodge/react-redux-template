import React from 'react';

class HelloSayer extends React.Component {
	render() {
		return( 
			<div>
				
				<div className="row">
		  			<div className="small-3 large-3 columns">great at -- last! nothing is here</div>
		  			<div className="small-3 large-3 columns">theeppp name is</div>
		  			<div className="small-3 large-3 columns">{this.props.name}</div>
				</div>

				<div className="row">
		  			<div className="small-6 columns">6 columns</div>
		  			<div className="small-6 columns">6 columns</div>
				</div>

			</div>
		);
	}
}

export default HelloSayer;