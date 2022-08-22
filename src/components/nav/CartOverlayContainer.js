import { OverlayBtn } from './OverlayBtn';
import React, { Component } from 'react';
import { createRef } from 'react';
import CartOverlay from '../cartOverlay/CartOverlay';
import { setCartDropdownTrue } from './methods/setCartDropdownTrue';

export default class CartOverlayContainer extends Component {
	overlay = createRef();

	componentDidMount() {
		document.addEventListener('click', this.handleClickOutside);
	}

	componentWillUnmount() {
		document.removeEventListener('click', this.handleClickOutside);
	}

	handleClickOutside = (event) => {
		if (
			this.overlay.current &&
			!this.overlay.current.contains(event.target)
		) {
			this.props.self.setState({
				cartDropdown: false,
			});
		}
	};
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
			<div className="cart-overlay-container" ref={this.overlay}>
				<OverlayBtn quantity={quantity} self={self} />
				<div
					onClick={() => setCartDropdownTrue(self)}
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
