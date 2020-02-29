import React, { Component } from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';

class Thoughts extends Component {
	state = {
		data: []
	};

	render() {
		return (
			<div className="thoughts">
				<Header title="Thoughts" />

				<div className="container thoughtsContainer">
					<ul>
						<li className="card">
							<div className="cardHeader">
								<p className="cardTitle">Thought</p>
								<p classname="cardTime">Feb 20, 2020 | 10:50PM</p>
							</div>
							<div className="cardContent">
								<p>
									It’s okay to not be an expert with React right now. I have my
									whole life to practice now that I am a developer.{' '}
								</p>
							</div>
							<div className="cardResult">
								<p>Felt better after recording</p>
							</div>
						</li>

						<li className="card">
							<div className="cardHeader">
								<p className="cardTitle">Thought</p>
								<p classname="cardTime">Feb 20, 2020 | 10:50PM</p>
							</div>
							<div className="cardContent">
								<p>
									It’s okay to not be an expert with React right now. I have my
									whole life to practice now that I am a developer.{' '}
								</p>
							</div>
							<div className="cardResult">
								<p>Felt better after recording</p>
							</div>
						</li>

						<li className="card">
							<div className="cardHeader">
								<p className="cardTitle">Thought</p>
								<p classname="cardTime">Feb 20, 2020 | 10:50PM</p>
							</div>
							<div className="cardContent">
								<p>
									It’s okay to not be an expert with React right now. I have my
									whole life to practice now that I am a developer.{' '}
								</p>
							</div>
							<div className="cardResult">
								<p>Felt better after recording</p>
							</div>
						</li>

						<li className="card">
							<div className="cardHeader">
								<p className="cardTitle">Thought</p>
								<p classname="cardTime">Feb 20, 2020 | 10:50PM</p>
							</div>
							<div className="cardContent">
								<p>
									It’s okay to not be an expert with React right now. I have my
									whole life to practice now that I am a developer.{' '}
								</p>
							</div>
							<div className="cardResult">
								<p>Felt better after recording</p>
							</div>
						</li>

						<li className="card">
							<div className="cardHeader">
								<p className="cardTitle">Thought</p>
								<p classname="cardTime">Feb 20, 2020 | 10:50PM</p>
							</div>
							<div className="cardContent">
								<p>
									It’s okay to not be an expert with React right now. I have my
									whole life to practice now that I am a developer.{' '}
								</p>
							</div>
							<div className="cardResult">
								<p>Felt better after recording</p>
							</div>
						</li>
					</ul>
				</div>

				<Nav />
			</div>
		);
	}
}

export default Thoughts;
