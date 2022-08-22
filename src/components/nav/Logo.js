import React, { Component } from 'react';

export default class Logo extends Component {
	render() {
		return (
			<div className="logo">
				<img
					src="./images/svg 2.png"
					alt="logo-back"
					className="logo-back"
				/>
				<img
					src="./images/svg 3.png"
					alt="logo-front"
					className="logo-front"
				/>
				<img
					src="./images/svg 19.png"
					alt="logo-front-semi-circle"
					className="logo-front-semi-circle"
				/>
				<img
					src="./images/svg 21.png"
					alt="logo-front-arrow-up"
					className="logo-front-arrow-up"
				/>
			</div>
		);
	}
}
