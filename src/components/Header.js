import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

class Header extends Component {
	state = {};
	render() {
		return (
			<div className="header">
				<div className="backBtn" onClick={() => this.props.history.goBack()}>
					<FontAwesomeIcon icon={faArrowLeft} />
				</div>
				<h1>{this.props.title}</h1>
			</div>
		);
	}
}

export default withRouter(Header);
