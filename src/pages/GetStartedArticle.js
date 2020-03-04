import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

import axios from 'axios';

import Header from '../components/Header';
import Nav from '../components/Nav';

class GetStartedArticle extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedArticle: ''
		};
	}

	componentDidMount() {
		const slug = this.props.match.params.slug;

		axios
			.get('https://api.buttercms.com/v2/content/ahon-get-started', {
				params: {
					auth_token: 'bb8e6b3f415a02f3aa781af85d482ceee6a14719',
					'fields.slug': slug
				}
			})
			.then(res => {
				this.setState({
					selectedArticle: res.data.data['ahon-get-started'][0]
				});
			});
	}

	render() {
		const { content } = this.state.selectedArticle;

		return (
			<div className="article">
				<Header title="Distortions" />
				<div className="container withHeader">
					<div className="articleContainer">
						<div
							className="articleContent"
							dangerouslySetInnerHTML={{ __html: content }}
						/>
					</div>
				</div>

				<Nav />
			</div>
		);
	}
}

export default withRouter(GetStartedArticle);
