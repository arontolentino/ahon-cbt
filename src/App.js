import React, { Component } from 'react';
import './App.css';

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
import EntryDetail from './pages/entry/EntryDetail';

class App extends Component {
	state = {
		thoughts: [],
		user: null
	};

	componentDidMount() {
		const db = firebase.firestore();
		const auth = firebase.auth();

		// Firebase Auth listener
		auth.onAuthStateChanged(user => {
			if (user) {
				this.setState({ user: user.uid });
			}
		});

		// Firestore real-time DB listener
		db.collection('thoughts')
			.orderBy('date')
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

				console.log(this.state.thoughts);
			});
	}

	onLogout = e => {
		// e.preventDefault();
		firebase.auth().signOut();
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

					<Route path="/thoughts/new-entry/" exact component={Entry} />

					<Route path="/learn" component={Learn} />
					<Route path="/settings" component={Settings} />

					<Route path="/entry" exact component={Entry} />
					<Route path="/entry/distortions" component={EntryDistortions} />
					<Route path="/entry/challenge" component={EntryChallenge} />
					<Route path="/entry/alternative" component={EntryAlternative} />
					<Route path="/entry/result" component={EntryResult} />
					<Route path="/entry/summary" component={EntrySummary} />
				</Switch>
			</Router>
		);
	}
}

export default App;
