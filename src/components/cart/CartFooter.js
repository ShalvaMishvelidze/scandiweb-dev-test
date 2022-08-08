import React, { Component } from 'react';

export default class CartFooter extends Component {
	render() {
		const cart = this.props.cart;
		const currency = this.props.currency;
		const total = this.props.total;
		const quantity = this.props.quantity;

		return (
			<div className="cart-total">
				<p>
					tax 21%:{' '}
					<span>
						{cart[0].prices[currency].currency.symbol}
						{parseFloat((total / 100) * 21).toFixed(2)}
					</span>
				</p>
				<p>
					quantity: <span>{quantity}</span>
				</p>
				<p>
					total:{' '}
					<span>
						{cart[0].prices[currency].currency.symbol}
						{parseFloat(total).toFixed(2)}
					</span>
				</p>
				<button
					className="order-btn"
					onClick={() => {
						alert('Order Completed');
					}}
				>
					order
				</button>
			</div>
		);
	}
}
