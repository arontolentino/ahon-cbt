import React, { Component } from 'react';

// eslint-disable-next-line
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
			<form>
				<input
					type="email"
					placholder="email"
					name="email"
					onChange={this.onInputValueChange}
				/>
				<input
					type="password"
					placholder="password"
					name="password"
					onChange={this.onInputValueChange}
				/>
				<button onClick={this.onRegister}>Register</button>
			</form>
		);
	}
}

export default Register;
