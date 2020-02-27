import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Switch>
				<Route
					path="/"
					render={() => {
						return <div>Root</div>;
					}}
				/>
			</Switch>
		</Router>
	);
}

export default App;
