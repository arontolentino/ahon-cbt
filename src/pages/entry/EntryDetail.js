import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import firebase from '../../config/firebase';
import moment from 'moment';

import Nav from '../../components/Nav';
import Header from '../../components/Header';

class EntryDetail extends Component {
	state = {
		selectedThought: {}
	};

	componentDidMount() {
		this.fetchSelectedThought();
	}

	fetchSelectedThought = () => {
		const db = firebase.firestore();
		const id = this.props.match.params.id;

		db.collection('thoughts')
			.doc(id)
			.get()
			.then(doc => {
				const selectedThought = doc.data();

				this.setState({ selectedThought });
			});
	};

	deleteSelectedThought = () => {
		const db = firebase.firestore();
		const id = this.props.match.params.id;

		db.collection('thoughts')
			.doc(id)
			.delete()
			.then(() => {
				this.props.history.push('/thoughts');
			});
	};

	render() {
		const {
			automaticThought,
			alternativeThought,
			challengeThought,
			date
		} = this.state.selectedThought;

		return (
			<div className="entry">
				<Header title="Thoughts" />

				<div className="container withHeader">
					<div className="entryContent">
						<div className="entryHeader">
							<h2>Summary of Thought</h2>
							{date !== undefined ? (
								<h4>
									{moment(new Date(date.seconds * 1000)).format(
										'MMMM D, YYYY | h:mm a'
									)}
								</h4>
							) : null}
						</div>

						<div className="entryThought">
							<h3>Your Thought</h3>
							<div className="thoughtContainer">
								<p>{automaticThought}</p>
							</div>
						</div>

						<div className="entryThought">
							<h3>How you challenged it</h3>
							<div className="thoughtContainer">
								<p>{challengeThought}</p>
							</div>
						</div>

						<div className="entryThought">
							<h3>What you could think</h3>
							<div className="thoughtContainer">
								<p>{alternativeThought}</p>
							</div>
						</div>
					</div>
					<div className="entryBtns">
						<div className="btn cancelBtn" onClick={this.deleteSelectedThought}>
							Delete
						</div>
						<Link to="/thoughts" className="btn">
							Finish
						</Link>
					</div>
				</div>
				<Nav />
			</div>
		);
	}
}

export default withRouter(EntryDetail);
