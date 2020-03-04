import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import firebase from './config/firebase';
import butter from './config/butter';

import Splash from './pages/user/Splash';
import Login from './pages/user/Login';
import Register from './pages/user/Register';
import Walkthrough from './pages/user/Walkthrough';

import Thoughts from './pages/Thoughts';
import Learn from './pages/Learn';
import Settings from './pages/Settings';

import Entry from './pages/entry/Entry';
import EntryAlternative from './pages/entry/EntryAlternative';
import EntryChallenge from './pages/entry/EntryChallenge';
import EntryDistortions from './pages/entry/EntryDistortions';
import EntryResult from './pages/entry/EntryResult';
import EntrySummary from './pages/entry/EntrySummary';
import ThoughtDetail from './pages/ThoughtDetail';

import DistortionArticle from './pages/DistortionArticle';
import GetStartedArticle from './pages/GetStartedArticle';
import EntryDetail from './pages/entry/EntryDetail';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			thoughts: [],

			learningGetStarted: [],
			learningDistortions: [],

			selectedArticle: null,

			automaticThought: null,
			selectedDistortions: [],
			challengeThought: null,
			alternativeThought: null,
			result: null,

			user: null
		};
	}

	componentDidMount() {
		this.initApp();
		this.fetchLearningContent();
	}

	initApp = () => {
		const auth = firebase.auth();

		// Firebase Auth listener
		auth.onAuthStateChanged(user => {
			if (user) {
				this.setState({ user: user.uid }, () => {
					this.fetchThoughts();
				});
			}
		});
	};

	fetchLearningContent = () => {
		butter.content
			.retrieve(['ahon-get-started'])
			.then(resp => {
				this.setState({
					learningGetStarted: resp.data.data['ahon-get-started']
				});
			})
			.catch(function(resp) {
				console.log(resp);
			});

		butter.content
			.retrieve(['ahon-distortions'])
			.then(resp => {
				this.setState({
					learningDistortions: resp.data.data['ahon-distortions']
				});
			})
			.catch(function(resp) {
				console.log(resp);
			});
	};

	fetchThoughts = () => {
		const db = firebase.firestore();

		db.collection('thoughts')
			.where('uid', '==', this.state.user)
			.orderBy('date', 'desc')
			.onSnapshot(querySnapshot => {
				const newThoughts = [];

				querySnapshot.forEach(function(doc) {
					newThoughts.push({
						data: doc.data(),
						id: doc.id
					});
				});

				this.setState({
					thoughts: newThoughts
				});
			});
	};

	createThought = () => {
		const db = firebase.firestore();

		db.collection('thoughts')
			.add({
				date: new Date(),
				uid: this.state.user,
				automaticThought: this.state.automaticThought,
				selectedDistortions: this.state.selectedDistortions,
				challengeThought: this.state.challengeThought,
				alternativeThought: this.state.alternativeThought,
				result: this.state.result
			})
			.then(() => {
				console.log('Document successfully written!');
				this.resetEntryDetails();
			})
			.catch(function(error) {
				console.error('Error writing document: ', error);
			});
	};

	setEntryDetails = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	resetEntryDetails = () => {
		this.setState({
			automaticThought: null
		});

		console.log('Entry details reset!');
	};

	setSelectedDistortions = selectedDistortions => {
		this.setState({
			selectedDistortions
		});
	};

	setEntryResult = entryResult => {
		this.setState({
			result: entryResult
		});
	};

	fetchArticle = slug => {
		console.log(this.state.learningDistortions);

		const selectedArticle = this.state.learningDistortions.filter(
			article => article.slug === slug
		);

		this.setState({
			selectedArticle: selectedArticle[0]
		});
	};

	render() {
		return (
			<Router>
				<Switch>
					<Route path="/" exact component={Splash} />
					<Route path="/login" component={Login} />
					<Route path="/register" component={Register} />
					<Route path="/walkthrough" component={Walkthrough} />

					{/* THOUGHTS ROUTES */}
					<Route
						path="/thoughts"
						exact
						render={() => <Thoughts thoughts={this.state.thoughts} />}
					/>

					<Route path="/entry/:id" component={EntryDetail} />

					{/* NEW ENTRY ROUTES */}
					<Route
						path="/thoughts/new-entry/"
						exact
						render={() => (
							<Entry
								setEntryDetails={this.setEntryDetails}
								automaticThought={this.state.automaticThought}
							/>
						)}
					/>

					<Route
						path="/thoughts/new-entry/distortions"
						render={() => (
							<EntryDistortions
								setSelectedDistortions={this.setSelectedDistortions}
								automaticThought={this.state.automaticThought}
							/>
						)}
					/>

					<Route
						path="/thoughts/new-entry/challenge"
						render={() => (
							<EntryChallenge
								setEntryDetails={this.setEntryDetails}
								automaticThought={this.state.automaticThought}
								challengeThought={this.state.challengeThought}
							/>
						)}
					/>

					<Route
						path="/thoughts/new-entry/alternative"
						render={() => (
							<EntryAlternative
								setEntryDetails={this.setEntryDetails}
								alternativeThought={this.state.alternativeThought}
							/>
						)}
					/>

					<Route
						path="/thoughts/new-entry/result"
						render={() => <EntryResult setEntryResult={this.setEntryResult} />}
					/>

					<Route
						path="/thoughts/new-entry/summary"
						render={() => (
							<EntrySummary
								automaticThought={this.state.automaticThought}
								selectedDistortions={this.state.selectedDistortions}
								challengeThought={this.state.challengeThought}
								alternativeThought={this.state.alternativeThought}
								result={this.state.result}
								createThought={this.createThought}
							/>
						)}
					/>

					{/* LEARN ROUTES */}
					<Route
						path="/learn"
						exact
						render={() => (
							<Learn
								learningGetStarted={this.state.learningGetStarted}
								learningDistortions={this.state.learningDistortions}
							/>
						)}
					/>

					<Route
						path="/learn/distortions/:slug"
						component={DistortionArticle}
					/>

					<Route
						path="/learn/get-started/:slug"
						component={GetStartedArticle}
					/>

					{/* SETTINGS ROUTES */}
					<Route path="/settings" component={Settings} />
				</Switch>
			</Router>
		);
	}
}

export default App;
