import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Nav from '../../components/Nav';
import Header from '../../components/Header';

class Entry extends Component {
	render() {
		return (
			<div className="entry">
				<Header title="Thoughts" />

				<div className="container withHeader">
					<div className="entryContent">
						<div className="entryHeader">
							<h2>Automatic Thoughts</h2>
							<h4>What's going on?</h4>
						</div>

						<textarea
							rows="4"
							cols="16"
							name="automaticThought"
							placeholder="ex. I suck at React!"
							value={this.props.automaticThought}
							onChange={e => {
								this.props.setEntryDetails(e);
							}}
						></textarea>
					</div>
					<div className="entryBtns">
						<Link to="/thoughts" className="btn cancelBtn">
							Cancel
						</Link>
						<Link to="/thoughts/new-entry/distortions" className="btn">
							Next
						</Link>
					</div>
				</div>
				<Nav />
			</div>
		);
	}
}

export default Entry;
