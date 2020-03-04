import React, { Component } from 'react';
import Nav from '../components/Nav';
import Header from '../components/Header';

import firebase from '../config/firebase';

class Settings extends Component {
	state = {};

	onLogOut = () => {
		console.log('Clicked Logout');
		firebase.auth().signOut();
		this.props.history.push('/');
	};

	render() {
		return (
			<div className="settings">
				<Header title="Settings" />

				<div className="container settingsContainer withHeader">
					<ul>
						<li className="option" onClick={this.onLogOut}>
							<p>Log Out</p>
						</li>
					</ul>
				</div>

				<Nav />
			</div>
		);
	}
}

export default Settings;
