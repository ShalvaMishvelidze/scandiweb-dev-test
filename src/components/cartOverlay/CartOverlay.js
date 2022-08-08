import React, { Component } from 'react';
import OverlayFooter from './OverlayFooter';
import OverlayItemRight from './OverlayItemRight';
import SwatchAttribute from './SwatchAttribute';
import TextAttributes from './TextAttributes';

export default class CartOverlay extends Component {
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
			<div>
				<p className="cart-overlay-title">
					<span>My Bag:</span> {quantity} items
				</p>
				<div className="cart-overlay-items">
					{cart.map((item, index) => {
						const {
							name,
							gallery,
							attributes,
							prices,
							brand,
							count,
							color,
							selectedAttributes,
						} = item;
						return (
							<section key={index}>
								<div className="cart-overlay-items-container">
									<div className="overlay-item-left">
										<h1 className="cart-overlay-item-title">
											{brand} {name}
										</h1>
										<p className="overlay-price">
											{prices[currency].amount}
											{prices[currency].currency.symbol}
										</p>
										{attributes.map((attribute) => {
											const { id, name, type, items } = attribute;
											return (
												<div
													key={id}
													className="overlay-attribute-container"
												>
													<h1 className="overlay-att-name">
														{name}:
													</h1>
													<div className="overlay-items-container">
														{type === 'swatch' && (
															<SwatchAttribute
																items={items}
																color={color}
															/>
														)}
														{type !== 'swatch' && (
															<TextAttributes
																items={items}
																selectedAttributes={
																	selectedAttributes
																}
																id={id}
															/>
														)}
													</div>
												</div>
											);
										})}
									</div>
									<OverlayItemRight
										increaseCount={increaseCount}
										decreaseCount={decreaseCount}
										removeFromCart={removeFromCart}
										app={app}
										gallery={gallery}
										count={count}
										index={index}
										name={name}
										item={item}
									/>
								</div>
							</section>
						);
					})}
				</div>
				{cart[0] && (
					<OverlayFooter cart={cart} currency={currency} total={total} />
				)}
			</div>
		);
	}
}
