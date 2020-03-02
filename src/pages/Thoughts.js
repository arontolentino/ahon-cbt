import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import moment from 'moment';

import Header from '../components/Header';
import Nav from '../components/Nav';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

class Thoughts extends Component {
	state = {};

	newThought = () => {};

	render() {
		return (
			<div className="thoughts">
				<Header title="Thoughts" />
				<div className="container thoughtsContainer withHeader">
					<Link to="/thoughts/new-entry">
						<div class="fab">
							<FontAwesomeIcon icon={faPlus} />
						</div>
					</Link>

					<ul>
						{this.props.thoughts.map(thought => (
							<li className="card" key={thought.id}>
								<div className="cardHeader">
									<p className="cardTitle">Thought</p>
									<p classname="cardTime">
										{moment(new Date(thought.data.date.seconds * 1000)).format(
											'MMMM DD, YYYY | h:mm a'
										)}
									</p>
								</div>
								<div className="cardContent">
									<p>{thought.data.alternativeThought}</p>
								</div>
								<div className="cardResult">
									<p>{thought.data.result}</p>
								</div>
							</li>
						))}
					</ul>
				</div>

				<Nav />
			</div>
		);
	}
}

export default Thoughts;
