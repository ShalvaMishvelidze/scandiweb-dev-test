import React, { Component } from 'react';

export default class OverlayItemRight extends Component {
	render() {
		const increaseCount = this.props.increaseCount;
		const decreaseCount = this.props.decreaseCount;
		const removeFromCart = this.props.removeFromCart;
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
						onClick={() => {
							decreaseCount(item, index, app);
							if (count - 1 === 0) {
								removeFromCart(index, app);
							}
						}}
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
