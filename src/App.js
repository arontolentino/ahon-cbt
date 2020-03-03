import React, { Component } from 'react';
import './App.css';

import moment from 'moment';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import firebase from './config/firebase';

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

class App extends Component {
	state = {
		thoughts: [],
		automaticThought: '',
		selectedDistortions: [],
		challengeThought: '',
		alternativeThought: '',
		result: '',
		user: null
	};

	componentDidMount() {
		this.authListener();
	}

	authListener = () => {
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

	fetchThoughts = () => {
		const db = firebase.firestore();

		console.log(this.state.user);

		db.collection('thoughts')
			.where('uid', '==', this.state.user)
			.orderBy('date', 'desc')
			.onSnapshot(querySnapshot => {
				const newThoughts = [];

				querySnapshot.forEach(function(doc) {
					console.log(doc.data());
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
			.then(function() {
				console.log('Document successfully written!');
				this.resetEntryDetails();
			})
			.catch(function(error) {
				console.error('Error writing document: ', error);
			});
	};

	onLogout = e => {
		// e.preventDefault();
		firebase.auth().signOut();
	};

	setEntryDetails = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	resetEntryDetails = () => {
		this.setState({
			automaticThought: 'yah',
			selectedDistortions: [],
			challengeThought: '',
			alternativeThought: '',
			result: ''
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

	render() {
		return (
			<Router>
				<Switch>
					<Route path="/" exact component={Splash} />

					<Route path="/login" component={Login} />
					<Route path="/register" component={Register} />
					<Route path="/walkthrough" component={Walkthrough} />

					<Route
						path="/thoughts"
						exact
						render={() => <Thoughts thoughts={this.state.thoughts} />}
					/>

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

					<Route path="/learn" component={Learn} />
					<Route path="/settings" component={Settings} />

					<Route path="/entry/result" component={EntryResult} />
				</Switch>
			</Router>
		);
	}
}

export default App;
