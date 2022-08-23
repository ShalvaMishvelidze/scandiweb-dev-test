import { OverlayItemsLeft } from './OverlayItemsLeft';
import React, { Component } from 'react';
import { quantity } from '../../methods/quantity';
import OverlayFooter from './OverlayFooter';
import OverlayItemRight from './OverlayItemRight';

export default class CartOverlay extends Component {
	render() {
		const cart = this.props.cart;
		const currency = this.props.currency;
		const app = this.props.app;

		return (
			<div className="overlay-container">
				<p className="cart-overlay-title">
					<span>My Bag:</span> {quantity(cart)} items
				</p>
				<div className="cart-overlay-items">
					{cart.map((item, index) => {
						return (
							<section key={index}>
								<div className="cart-overlay-items-container">
									<OverlayItemsLeft item={item} currency={currency} />
									<OverlayItemRight
										app={app}
										gallery={item.gallery}
										count={item.count}
										index={index}
										name={item.name}
										item={item}
									/>
								</div>
							</section>
						);
					})}
				</div>
				{cart[0] && <OverlayFooter cart={cart} currency={currency} />}
			</div>
		);
	}
}
