import React, { Component } from 'react';
import { setCartDropdown } from './methods/setCartDropdown';

export class OverlayBtn extends Component {
	render() {
		const self = this.props.self;

		return (
			<button
				className="cart-overlay-btn"
				onClick={() => setCartDropdown(self)}
			>
				<div className="cart-overlay-icon-container">
					<div className="cart-overlay-icon">
						<div
							className={
								this.props.quantity > 0
									? 'cart-items-count display-cart-items-count'
									: 'cart-items-count'
							}
						>
							<span>{this.props.quantity}</span>
						</div>
						<img src="./images/cart.png" alt="cart" />
					</div>
					<div className="cart-overlay-wheels-container">
						<img src="./images/cart-wheel.png" alt="cart wheel" />
						<img src="./images/cart-wheel.png" alt="cart wheel" />
					</div>
				</div>
			</button>
		);
	}
}
