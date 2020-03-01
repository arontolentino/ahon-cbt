import React, { Component } from 'react';
import Nav from '../components/Nav';
import Header from '../components/Header';

class Settings extends Component {
	state = {};
	render() {
		return (
			<div className="settings">
				<Header title="Settings" />

				<Nav />
			</div>
		);
	}
}

export default Settings;
