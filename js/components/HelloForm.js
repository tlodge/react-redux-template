import HelloSayer from './HelloSayer';
import React  from 'react';

class HelloForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = { name: 'world' };
	}

	render() {
		return (<div>
					<div className="row">
						<div className="small-12 columns">
							<input type="text" onChange={this.onChange.bind(this)} />
						</div>
		 			</div>
					<HelloSayer name={this.state.name} />
				</div>);
	}

	onChange(e) {
		this.setState({ name: e.target.value });
	}
}

export default HelloForm;
