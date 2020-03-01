import React, { Component } from 'react';
import Nav from '../components/Nav';
import Header from '../components/Header';

class Learn extends Component {
	state = {};
	render() {
		return (
			<div className="learn">
				<Header title="Learn" />

				<Nav />
			</div>
		);
	}
}

export default Learn;
