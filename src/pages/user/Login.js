import React, { Component } from 'react';
import firebase from 'firebase';

class Login extends Component {
	state = {};

	// Log in existing user
	onLogin = e => {
		e.preventDefault();

		const { email, password } = this.state;
		console.log(email);
		console.log(password);

		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(() => {
				console.log('User is signed in!');
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
			<div className="login container">
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

export default Login;
