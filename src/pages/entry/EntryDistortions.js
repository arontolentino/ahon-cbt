import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Nav from '../../components/Nav';
import Header from '../../components/Header';

class EntryDistortions extends Component {
	state = {
		commonDistortions: [
			{
				name: 'All or Nothing Thinking',
				desc: 'Ex. That was a thorough waste of time'
			},
			{
				name: 'Catastrophizing',
				desc: 'Focusing on the worst possible scenario'
			},
			{
				name: 'Emotional Reasoning',
				desc: 'Ex. “I feel afraid, so I’ll have a panic attack.”'
			},
			{
				name: 'Fortune Telling',
				desc: 'Ex. “I’ll get sick at the party.”'
			},
			{
				name: 'Labeling',
				desc: 'Ex. “He’s a jerk”'
			},
			{
				name: 'Magnification of the Negative',
				desc: 'Ex. “Focusing only on what went wrong”'
			},
			{
				name: 'Minimization of the Positive',
				desc: 'Ignoring the good things that happened'
			},
			{
				name: 'Other Blaming',
				desc: 'Assigning all the blame to someone else'
			},
			{
				name: 'Over Generalization',
				desc: 'Ex. “Everyone will let me down”'
			},
			{
				name: 'Self Blaming',
				desc: 'Taking all the blame on yourself'
			},
			{
				name: 'Should Statements',
				desc: 'Ex. “I should have been better.”'
			}
		],
		selectedDistortions: []
	};

	toggleCheckbox = selectedDistortion => {
		if (this.state.selectedDistortions.includes(selectedDistortion)) {
			console.log(selectedDistortion);

			const oldState = [...this.state.selectedDistortions];

			const newState = oldState.filter(
				distortion => distortion !== selectedDistortion
			);

			this.setState(
				{
					selectedDistortions: newState
				},
				() => {
					this.props.setSelectedDistortions(this.state.selectedDistortions);
				}
			);
		} else {
			const newState = [...this.state.selectedDistortions];

			newState.push(selectedDistortion);

			this.setState(
				{
					selectedDistortions: newState
				},
				() => {
					this.props.setSelectedDistortions(this.state.selectedDistortions);
				}
			);
		}
	};

	render() {
		return (
			<div className="entry">
				<Header title="Thoughts" />

				<div className="container withHeader">
					<div className="entryContent">
						<div className="enteryHeader">
							<h2>Cognitive Distortions</h2>
							<h4>Is this thought logical?</h4>
						</div>

						<div className="entryThought">
							<h3>Your Thought</h3>
							<div className="thoughtContainer">
								<p>{this.props.automaticThought}</p>
							</div>
						</div>

						<div className="entryDistortions">
							<h3>Common Distortions</h3>
							<h4>Tap any of these that apply to your current situation.</h4>

							{this.state.commonDistortions.map((commonDistortion, index) => (
								<div className="distortionsContainer">
									<div className="distortionCheckBox">
										<input
											type="checkbox"
											name="distortions"
											id={commonDistortion.name}
											className="distortionsInput"
											onChange={e => {
												this.toggleCheckbox(e.target.id);
											}}
										/>
										<label
											htmlFor={commonDistortion.name}
											class="distortionsLabel"
										>
											<div className="card">
												<div className="cardHeader">
													<p className="cardTitle">{commonDistortion.name}</p>
													{/* <p classname="cardTime">Feb 20, 2020 | 10:50PM</p> */}
												</div>
												<div className="cardResult">
													<p>{commonDistortion.desc}</p>
												</div>
												<div />
											</div>
										</label>
									</div>
								</div>
							))}
						</div>
					</div>

					<div className="entryBtns">
						<Link to="/thoughts/new-entry" className="btn cancelBtn">
							Back
						</Link>
						<Link to="/thoughts/new-entry/challenge" className="btn">
							Next
						</Link>
					</div>
				</div>
				<Nav />
			</div>
		);
	}
}

export default EntryDistortions;
