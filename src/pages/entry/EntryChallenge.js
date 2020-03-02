import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Nav from '../../components/Nav';
import Header from '../../components/Header';

class EntryChallenge extends Component {
	render() {
		return (
			<div className="entry">
				<Header title="Thoughts" />

				<div className="container withHeader">
					<div className="entryContent">
						<div className="entryHeader">
							<h2>Challenge the thought</h2>
							<h4>
								What could you be wrong about? Is there something you don’t have
								enough evidence for?
							</h4>
						</div>

						<div className="entryThought">
							<h3>Your Thought</h3>
							<div className="thoughtContainer">
								<p>{this.props.automaticThought}</p>
							</div>
						</div>

						<div className="entryThought">
							<h3>Your Challenge</h3>
							<textarea
								rows="2"
								cols="16"
								name="challengeThought"
								placeholder="Ex. Well… maybe everyone sucks at React at this point. It’s not just me. "
								value={this.props.challengeThought}
								onChange={e => {
									this.props.setEntryDetails(e);
								}}
							></textarea>
						</div>
					</div>
					<div className="entryBtns">
						<Link
							to="/thoughts/new-entry/distortions"
							className="btn cancelBtn"
						>
							Back
						</Link>
						<Link to="/thoughts/new-entry/alternative" className="btn">
							Next
						</Link>
					</div>
				</div>
				<Nav />
			</div>
		);
	}
}

export default EntryChallenge;
