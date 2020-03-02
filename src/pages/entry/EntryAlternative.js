import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Nav from '../../components/Nav';
import Header from '../../components/Header';

class EntryAlternative extends Component {
	render() {
		return (
			<div className="entry">
				<Header title="Thoughts" />

				<div className="container withHeader">
					<div className="entryContent">
						<div className="entryHeader">
							<h2>Alternative Thought</h2>
							<h4>Given the situation again, what could you think instead?</h4>
							<textarea
								rows="4"
								cols="16"
								name="alternativeThought"
								placeholder="ex. It’s okay to not be an expert with React right now. I have my whole life to practice now that I am a developer."
								value={this.props.alternativeThought}
								onChange={e => {
									this.props.setEntryDetails(e);
								}}
							></textarea>
						</div>
					</div>
					<div className="entryBtns">
						<Link to="/thoughts/new-entry/challenge" className="btn cancelBtn">
							Back
						</Link>
						<Link to="/thoughts/new-entry/result" className="btn">
							Next
						</Link>
					</div>
				</div>
				<Nav />
			</div>
		);
	}
}

export default EntryAlternative;
