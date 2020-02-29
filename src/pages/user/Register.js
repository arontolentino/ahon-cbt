import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import firebase from '../../config/firebase';

class Register extends Component {
	state = {};

	// Register new user
	onRegister = e => {
		e.preventDefault();

		const { email, password } = this.state;
		console.log(email);
		console.log(password);

		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(() => {
				console.log('User is created!');
				this.setState({});
			})
			.catch(error => {
				console.log(error);
			});
	};

	onInputValueChange = e => {
		console.log(e.target.value);
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
				<h1>Register</h1>
				<form className="authContainer">
					<input
						type="text"
						placeholder="Name"
						className="authInput"
						name="name"
						onChange={this.onInputValueChange}
					/>
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
					<button className="btn" onClick={this.onRegister}>
						Continue
					</button>
				</form>
			</div>
		);
	}
}

export default withRouter(Register);
