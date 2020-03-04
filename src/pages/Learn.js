import React, { Component } from 'react';
import Nav from '../components/Nav';
import Header from '../components/Header';

import { withRouter, Link } from 'react-router-dom';

class Learn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			getStarted: [],
			distortions: []
		};
	}

	componentDidMount() {}

	render() {
		return (
			<div className="learn">
				<Header title="Learn" />

				<div className="container withHeader">
					<div className="categoryList">
						<div className="category">
							<h2 className="categoryTitle">Get Started</h2>
							<ul>
								{this.props.learningGetStarted.map((article, index) => (
									<li className="card" key={index}>
										<Link to={`/learn/get-started/${article.slug}`}>
											<div className="cardHeader">
												<p className="cardCategory">Article</p>
											</div>
											<div className="cardContent">
												<p className="cardTitle">{article.title}</p>
												<p className="cardDesc">{article.subtitle}</p>
											</div>
										</Link>
									</li>
								))}
							</ul>
						</div>

						<div className="category">
							<h2 className="categoryTitle">Cognitive Distortions</h2>
							<ul>
								{this.props.learningDistortions.map((article, index) => (
									<li className="card" key={index}>
										<Link to={`/learn/distortions/${article.slug}`}>
											<div className="cardHeader">
												<p className="cardCategory">Article</p>
											</div>
											<div className="cardContent">
												<p className="cardTitle">{article.title}</p>
												<p className="cardDesc">{article.subtitle}</p>
											</div>
										</Link>
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

export default withRouter(Learn);
