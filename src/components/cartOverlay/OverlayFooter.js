import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class OverlayFooter extends Component {
	render() {
		const cart = this.props.cart;
		const currency = this.props.currency;
		const total = this.props.total;

		return (
			<div className="overlay-footer">
				<div className="overlay-total">
					<span>total: </span>
					<span>
						{cart[0].prices[currency].currency.symbol}
						{parseFloat(total).toFixed(2)}
					</span>
				</div>
				<div className="overlay-btn-container">
					<Link to={'/cart'}>
						<button className="view-bag-btn">view bag</button>
					</Link>
					<button
						className="check-out-btn"
						onClick={() => {
							alert('Order Complete');
						}}
					>
						check out
					</button>
				</div>
			</div>
		);
	}
}
