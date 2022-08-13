import React, { Component } from 'react';
import CartOverlay from '../cartOverlay/CartOverlay';

export default class CartOverlayContainer extends Component {
	render() {
		const self = this.props.self;
		const quantity = this.props.quantity;
		const cart = this.props.cart;
		const currency = this.props.currency;
		const increaseCount = this.props.increaseCount;
		const decreaseCount = this.props.decreaseCount;
		const removeFromCart = this.props.removeFromCart;
		const app = this.props.app;

		return (
			<div className="cart-overlay-container">
				<button
					className="cart-overlay-btn"
					onClick={() => {
						if (self.state.cartDropdown) {
							self.setState({
								cartDropdown: false,
							});
						} else {
							self.setState({
								cartDropdown: true,
							});
						}
					}}
				>
					<div className="cart-overlay-icon-container">
						<div className="cart-overlay-icon">
							<div
								className={
									quantity > 0
										? 'cart-items-count display-cart-items-count'
										: 'cart-items-count'
								}
							>
								<span>{quantity}</span>
							</div>
							<img src="./images/cart.png" alt="cart" />
						</div>
						<div className="cart-overlay-wheels-container">
							<img src="./images/cart-wheel.png" alt="cart wheel" />
							<img src="./images/cart-wheel.png" alt="cart wheel" />
						</div>
					</div>
				</button>
				<div
					className={
						self.state.cartDropdown
							? 'cart-overlay show-overlay'
							: 'cart-overlay'
					}
				>
					<CartOverlay
						cart={cart}
						currency={currency}
						increaseCount={increaseCount}
						decreaseCount={decreaseCount}
						removeFromCart={removeFromCart}
						app={app}
					/>
				</div>
			</div>
		);
	}
}
