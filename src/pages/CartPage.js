import React, { Component } from 'react';
import Cart from '../components/cart/Cart';

export default class CartPage extends Component {
	render() {
		const cart = this.props.cart;
		const currency = this.props.currency;
		const increaseCount = this.props.increaseCount;
		const decreaseCount = this.props.decreaseCount;
		const removeFromCart = this.props.removeFromCart;
		const app = this.props.app;

		const total = cart.reduce((acc, item) => {
			return acc + item.prices[currency].amount * item.count;
		}, 0);
		const quantity = cart.reduce((acc, item) => {
			return acc + item.count;
		}, 0);

		return (
			<Cart
				cart={cart}
				currency={currency}
				increaseCount={increaseCount}
				decreaseCount={decreaseCount}
				removeFromCart={removeFromCart}
				total={total}
				quantity={quantity}
				app={app}
			/>
		);
	}
}
