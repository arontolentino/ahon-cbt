import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import firebase from 'firebase';

class Login extends Component {
	state = {};

	// Log in existing user
	onLogin = e => {
		e.preventDefault();

		const { email, password } = this.state;

		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(() => {
				this.setState({});
				this.props.history.push('/thoughts');
			})
			.catch(error => {
				console.log(error);
			});
	};

	onInputValueChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	render() {
		return (
			<div className="auth container">
				<div
					className="authBackBtn"
					onClick={() => this.props.history.goBack()}
				>
					<FontAwesomeIcon icon={faArrowLeft} />
				</div>
				<h1>Login</h1>
				<form className="authContainer">
					<input
						type="email"
						placeholder="Email"
						className="authInput"
						name="email"
						onChange={this.onInputValueChange}
					/>
					<input
						type="password"
						placeholder="Password"
						className="authInput"
						name="password"
						onChange={this.onInputValueChange}
					/>
					<button className="btn" onClick={this.onLogin}>
						Continue
					</button>
				</form>
			</div>
		);
	}
}

export default withRouter(Login);
