import React, { Component } from 'react';
import Nav from '../components/Nav';
import Header from '../components/Header';

import butter from '../config/butter';

class Learn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			getStarted: [],
			distortions: []
		};
	}

	componentDidMount() {
		butter.content
			.retrieve(['ahon-get-started'])
			.then(resp => {
				this.setState({
					getStarted: resp.data.data['ahon-get-started']
				});
			})
			.catch(function(resp) {
				console.log(resp);
			});

		butter.content
			.retrieve(['ahon-distortions'])
			.then(resp => {
				this.setState({
					distortions: resp.data.data['ahon-distortions']
				});
			})
			.catch(function(resp) {
				console.log(resp);
			});
	}

	render() {
		return (
			<div className="learn">
				<Header title="Learn" />

				<div className="container withHeader">
					<div className="categoryList">
						<div className="category">
							<h2 className="categoryTitle">Get Started</h2>
							<ul>
								{this.state.getStarted.map((article, index) => (
									<li className="card" key={index}>
										<div className="cardHeader">
											<p className="cardCategory">Article</p>
										</div>
										<div className="cardContent">
											<p className="cardTitle">{article.title}</p>
											<p className="cardDesc">{article.subtitle}</p>
										</div>
									</li>
								))}
							</ul>
						</div>

						<div className="category">
							<h2 className="categoryTitle">Cognitive Distortions</h2>
							<ul>
								{this.state.distortions.map((article, index) => (
									<li className="card" key={index}>
										<div className="cardHeader">
											<p className="cardCategory">Article</p>
										</div>
										<div className="cardContent">
											<p className="cardTitle">{article.title}</p>
											<p className="cardDesc">{article.subtitle}</p>
										</div>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>

				<Nav />
			</div>
		);
	}
}

export default Learn;
