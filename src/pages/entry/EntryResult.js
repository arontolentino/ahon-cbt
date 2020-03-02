import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Nav from '../../components/Nav';
import Header from '../../components/Header';

class EntryResult extends Component {
	state = {
		resultOptions: ['Better than before', 'About the same', 'Worse than before']
	};

	render() {
		return (
			<div className="entry">
				<Header title="Thoughts" />

				<div className="container withHeader result">
					<div className="entryContent">
						<div className="entryHeader">
							<h2>How are you feeling now?</h2>
						</div>
					</div>

					<div className="entryResults">
						{this.state.resultOptions.map((option, index) => (
							<div className="resultContainer" key={index}>
								<input
									type="radio"
									name="result"
									id={option}
									className="resultInput"
									onChange={e => {
										this.props.setEntryResult(e.target.id);
									}}
								/>
								<label htmlFor={option} className="resultLabel">
									<div class="resultOption">
										<p>{option}</p>
									</div>
								</label>
							</div>
						))}
					</div>

					<div className="entryBtns">
						<Link
							to="/thoughts/new-entry/alternative"
							className="btn cancelBtn"
						>
							Back
						</Link>
						<Link to="/thoughts/new-entry/summary" className="btn">
							Next
						</Link>
					</div>
				</div>
				<Nav />
			</div>
		);
	}
}

export default EntryResult;
