import React, { Component } from 'react';

export default class ItemRight extends Component {
	render() {
		const name = this.props.name;
		const gallery = this.props.gallery;
		const count = this.props.count;
		const increaseCount = this.props.increaseCount;
		const decreaseCount = this.props.decreaseCount;
		const removeFromCart = this.props.removeFromCart;
		const item = this.props.item;
		const index = this.props.index;
		const app = this.props.app;

		return (
			<div className="item-right">
				<div className="count-container">
					<button
						className="count-btn"
						onClick={() => increaseCount(item, index, app)}
					>
						<div className="count-btn-box">
							<span>+</span>
						</div>
					</button>
					<p className="count">{count}</p>
					<button
						className="count-btn"
						onClick={() => {
							decreaseCount(item, index, app);
							if (count - 1 === 0) {
								removeFromCart(index, app);
							}
						}}
					>
						<div className="count-btn-box">
							<span>-</span>
						</div>
					</button>
				</div>
				<div className="cart-item-image">
					<img src={gallery[0]} alt={name} />
				</div>
			</div>
		);
	}
}
