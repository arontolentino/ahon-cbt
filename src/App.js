import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
		entry: {
			thought: '',
			distortions: [],
			result: '',
			challenge: '',
			alternative: ''
		},
		activeNav: ''
	};

	componentDidMount() {
		console.log('Component did mount!');
	}

	render() {
		return (
			<Router>
				<Switch>
					<Route path="/" exact />

					<Route path="/login" component={Login} />

					<Route path="/register" component={Register} />
					<Route path="/walkthrough" component={Walkthrough} />

					<Route path="/thoughts" component={Thoughts} />
					<Route path="/learn" component={Learn} />
					<Route path="/settings" component={Settings} />

					<Route path="/thoughts/:id" component={EntryDetail} />

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
