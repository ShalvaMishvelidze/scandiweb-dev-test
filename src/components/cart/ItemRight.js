import React, { Component } from 'react';
import { increaseCount } from '../../methods/increaseCount';
import { minus } from '../../methods/minus';

export default class ItemRight extends Component {
	render() {
		const name = this.props.name;
		const gallery = this.props.gallery;
		const count = this.props.count;
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
							minus(item, index, app, count);
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
