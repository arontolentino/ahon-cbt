import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Splash extends Component {
	state = {};
	render() {
		return (
			<div className="splash container">
				<h1>Welcome to Ahon.</h1>
				<p>
					Ahon helps you investigate if your thoughts are accurate using an
					effective, evidence-backed CBT exercise.{' '}
				</p>
				<Link to="/login">
					<button className="btn">Login</button>
				</Link>
				<Link to="/register">
					<button className="btn btnSecondary">Register</button>
				</Link>
			</div>
		);
	}
}

export default Splash;
