import React, { Component } from 'react';
import { quantity } from '../../methods/quantity';
import { total } from '../../methods/total';

export default class CartFooter extends Component {
	render() {
		const cart = this.props.cart;
		const currency = this.props.currency;

		return (
			<div className="cart-total">
				<p>
					tax 21%:{' '}
					<span>
						{cart[0].prices[currency].currency.symbol}
						{parseFloat((total(cart, currency) / 100) * 21).toFixed(2)}
					</span>
				</p>
				<p>
					quantity: <span>{quantity(cart)}</span>
				</p>
				<p>
					total:{' '}
					<span>
						{cart[0].prices[currency].currency.symbol}
						{parseFloat(total(cart, currency)).toFixed(2)}
					</span>
				</p>
				<button
					className="order-btn"
					onClick={() => alert('Order Completed')}
				>
					order
				</button>
			</div>
		);
	}
}
