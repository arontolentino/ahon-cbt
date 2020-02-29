import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
	state = {};
	render() {
		return (
			<div className="nav">
				<NavLink to="/settings" activeClassName="active">
					Settings
				</NavLink>

				<NavLink to="/thoughts" activeClassName="active">
					Thoughts
				</NavLink>

				<NavLink to="/learn" activeClassName="active">
					Learn
				</NavLink>
			</div>
		);
	}
}

export default Nav;
