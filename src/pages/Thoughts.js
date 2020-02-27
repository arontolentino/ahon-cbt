import React, { Component } from 'react';

class Thoughts extends Component {
	state = {
		data: []
	};

	render() {
		return (
			<ul>
				{this.props.thoughts.map(thought => {
					return <li key={thought.id}>{thought.data.content}</li>;
				})}
			</ul>
		);
	}
}

export default Thoughts;
