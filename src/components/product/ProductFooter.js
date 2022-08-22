import React, { Component } from 'react';
import { Markup } from 'interweave';

export class ProductFooter extends Component {
	render() {
		const currency = this.props.currency;
		return (
			<>
				<h1 className="product-price">Price:</h1>
				<h1 className="product-price-value">
					{this.props.product.prices[currency].amount}
					{this.props.product.prices[currency].currency.symbol}
				</h1>
				<button
					className="cart-btn"
					onClick={() =>
						this.props.addToCart(
							this.props.product,
							this.props.setCart,
							this.props.cartProduct(
								this.props.product,
								this.props.self
							),
							this.props.self,
							this.props.app
						)
					}
				>
					add to cart
				</button>
				<div className="description">
					<Markup content={this.props.product.description} />
				</div>
			</>
		);
	}
}
