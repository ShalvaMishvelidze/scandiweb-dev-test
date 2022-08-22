import { ProductLink } from './ProductLink';
import React, { Component } from 'react';
import AddToCart from './AddToCart';
import { hoverStart } from './methods/hoverStart';
import { hoverEnd } from './methods/hoverEnd';

export default class OneProduct extends Component {
	constructor() {
		super();
		this.state = {
			showAddToCart: false,
		};
	}

	render() {
		const product = this.props.product;
		const currency = this.props.currency;
		const setCart = this.props.setCart;
		const app = this.props.app;
		const self = this;

		return (
			<div
				className={
					!product.inStock ? 'products out-of-stock-products' : 'products'
				}
				onMouseEnter={(e) => hoverStart(e, self)}
				onMouseLeave={(e) => hoverEnd(e, self)}
			>
				<ProductLink product={product} currency={currency} />
				<AddToCart
					product={product}
					setCart={setCart}
					app={app}
					showAddToCart={this.state.showAddToCart}
				/>
			</div>
		);
	}
}
