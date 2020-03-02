import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Nav from '../../components/Nav';
import Header from '../../components/Header';

class EntrySummary extends Component {
	render() {
		return (
			<div className="entry">
				<Header title="Thoughts" />

				<div className="container withHeader">
					<div className="entryContent">
						<div className="entryHeader">
							<h2>Summary of Thought</h2>
							<h4>March 26, 2020 at 10:44AM</h4>
						</div>

						<div className="entryThought">
							<h3>Your Thought</h3>
							<div className="thoughtContainer">
								<p>{this.props.automaticThought}</p>
							</div>
						</div>

						<div className="entryThought">
							<h3>How you challenged it</h3>
							<div className="thoughtContainer">
								<p>{this.props.challengeThought}</p>
							</div>
						</div>

						<div className="entryThought">
							<h3>What you could think</h3>
							<div className="thoughtContainer">
								<p>{this.props.alternativeThought}</p>
							</div>
						</div>
					</div>
					<div className="entryBtns">
						<Link to="/thoughts/new-entry/result" className="btn cancelBtn">
							Back
						</Link>
						<Link to="/thoughts" className="btn">
							Save
						</Link>
					</div>
				</div>
				<Nav />
			</div>
		);
	}
}

export default EntrySummary;
