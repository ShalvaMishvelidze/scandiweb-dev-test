import React, { Component } from 'react';
import Cart from '../components/cart/Cart';

export default class CartPage extends Component {
	render() {
		const cart = this.props.cart;
		const currency = this.props.currency;
		const app = this.props.app;

		return <Cart cart={cart} currency={currency} app={app} />;
	}
}
