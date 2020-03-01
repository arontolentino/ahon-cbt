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
						<h2>Automatic Thoughts</h2>
						<p>What's going on?</p>
						<textarea
							rows="5"
							cols="16"
							name="automaticThought"
							defaultValue={this.props.automaticThought}
							onChange={e => {
								this.props.setEntryDetails(e);
							}}
						></textarea>
					</div>
					<div className="entryBtns">
						<Link to="/thoughts" className="btn cancelBtn">
							Cancel
						</Link>
						<button className="btn">Next</button>
					</div>
				</div>
				<Nav />
			</div>
		);
	}
}

export default Entry;
