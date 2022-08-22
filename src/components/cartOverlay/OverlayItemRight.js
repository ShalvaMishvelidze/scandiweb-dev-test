import React, { Component } from 'react';
import { increaseCount } from '../../methods/increaseCount';
import { minus } from '../../methods/minus';

export default class OverlayItemRight extends Component {
	render() {
		const gallery = this.props.gallery;
		const count = this.props.count;
		const index = this.props.index;
		const name = this.props.name;
		const item = this.props.item;
		const app = this.props.app;

		return (
			<div className="overlay-item-right">
				<div className="overlay-count-container">
					<button
						className="overlay-plus-btn"
						onClick={() => increaseCount(item, index, app)}
					>
						<div className="overlay-plus-btn-box">
							<span>+</span>
						</div>
					</button>
					<p className="overlay-count">{count}</p>
					<button
						className="overlay-minus-btn"
						onClick={() => minus(item, index, app, count)}
					>
						<div className="overlay-minus-btn-box">
							<span>-</span>
						</div>
					</button>
				</div>
				<div className="overlay-item-image">
					<img src={gallery[0]} alt={name} />
				</div>
			</div>
		);
	}
}
