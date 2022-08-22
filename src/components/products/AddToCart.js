import React, { Component } from 'react';
import { cartProduct } from './methods/cartProduct';

export default class AddToCart extends Component {
	render() {
		const product = this.props.product;
		const setCart = this.props.setCart;
		const showAddToCart = this.props.showAddToCart;
		const app = this.props.app;

		return (
			<div
				className={
					product.inStock && showAddToCart
						? 'add-to-cart display-add-to-cart'
						: 'add-to-cart'
				}
				onClick={() => setCart(cartProduct(product), app)}
			>
				<div className="cart-icon-container">
					<img
						src="./images/cart-light.png"
						alt="cart"
						className="cart-icon"
					/>
				</div>
				<div className="cart-wheels-container">
					<img
						src="./images/cart-wheel-light.png"
						alt="cart-wheel"
						className="cart-wheel-left"
					/>
					<img
						src="./images/cart-wheel-light.png"
						alt="cart-wheel"
						className="cart-wheel-right"
					/>
				</div>
			</div>
		);
	}
}
