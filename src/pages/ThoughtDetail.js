import React, { Component } from 'react';

class ThoughtDetail extends Component {
	state = {};

	componentDidMount() {
		const { id } = this.props.match.params;
		const { testData } = this.props.location.state;

		console.log(id);
		console.log(testData);
	}

	render() {
		return <p>Entry Detail</p>;
	}
}

export default ThoughtDetail;
